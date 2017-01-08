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
  getPage() {
    const page = parseInt(this.props.params.page, 10) || 1;
    return page;
  }

  getType() {
    const type = this.props.params.type || 'topstories';
    return type;
  }

  fetchStories() {
    const page = this.getPage();
    const type = this.getType();
    this.props.fetch(type, page);
  }

  componentDidMount() {
    this.fetchStories();
  }

  componentDidUpdate(prevProps: Props) {
    const {params} = this.props;
    if (params.type !== prevProps.params.type || params.page !== prevProps.params.page) {
      this.fetchStories();
    }
  }

  render() {
    const { isFetching, news } = this.props;
    if (isFetching) {
      return (
        <Spinner />
      );
    }

    return (
      <NewsList
        news={news}
        page={this.getPage()}
        onClick={(id) => {
          this.props.router.push(`/story/${id}`);
        }}
        onLeftNav={() => {
          this.props.router.push(
            `/feed/${this.getType()}/${this.getPage() - 1}`
          );
        }}
        onRightNav={() => {
          this.props.router.push(
            `/feed/${this.getType()}/${this.getPage() + 1}`
          );
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
  fetch: (type: string, page: number) => {
    dispatch(fetchNews(type, page));
  },
});

const NewsFeed = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsFeedWrapper));

export default NewsFeed;
