import * as React from 'react';
import {connect} from 'react-redux';
import NewsList from '../components/NewsList';
import {fetchNews} from '../actions/news';
import {getNewsList, getIsFetching} from '../reducers';
import CircularProgress from 'material-ui/CircularProgress';

interface Props {
  isFetching: boolean;
  news: Story[];
  fetch: Function;
}

class NewsFeedWrapper extends React.Component<Props, null> {
  componentDidMount() {
    this.props.fetch('topstories');
  }

  render() {
    const { isFetching, news } = this.props;
    if (isFetching && !news.length) {
      return (
        <div className="container" style={{ marginTop: '50px' }}>
          <CircularProgress
            size={80}
            thickness={5}
          />
        </div>
      );
    }

    return (
      <NewsList news={news} />
    );
  }
}

const mapStateToProps = (state: State) => ({
  news: getNewsList(state),
  isFetching: getIsFetching(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetch: (type: string) => {
    dispatch(fetchNews(type));
  },
});

const NewsFeed = connect(mapStateToProps, mapDispatchToProps)(NewsFeedWrapper);

export default NewsFeed;
