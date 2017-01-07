import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {InjectedRouter} from '@types/react-router';
import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';
import {fetchNews} from '../actions/news';
import {getNewsList, getIsFetching} from '../reducers';

interface Props {
  isFetching: boolean;
  news: Story[];
  fetch: Function;
  router: InjectedRouter;
  params: FeedRouteParam;
}

class NewsFeedWrapper extends React.Component<Props, null> {
  componentDidMount() {
    this.props.fetch(this.props.params.type || 'topstories');
  }

  render() {
    const { isFetching, news } = this.props;
    if (isFetching && !news.length) {
      return (
        <Spinner />
      );
    }

    return (
      <NewsList
        news={news}
        onClick={(id) => {
          this.props.router.push(`/story/${id}`);
        }}
      />
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

const NewsFeed = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsFeedWrapper));

export default NewsFeed;
