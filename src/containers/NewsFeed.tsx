import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {InjectedRouter} from '@types/react-router';
import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';
import {fetchNews} from '../actions/news';
import {getNewsList, getIsFetching, getTopPageCount, getNewPageCount, getCachedNewPage, getCachedTopPage} from '../reducers';

interface Props {
  isFetching: boolean;
  news: Story[];
  fetch: Function;
  router: InjectedRouter;
  params: FeedRouteParam;
  topPageCount: number;
  newPageCount: number;
  getCachedTopPage: (id: number) => Story[];
  getCachedNewPage: (id: number) => Story[];
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

  getPageCount() {
    const itemCount = this.getType() === 'topstories' ? this.props.topPageCount : this.props.newPageCount;
    return Math.floor(itemCount / 10);
  }

  fetchCachedStories() {
    const pageNumber = this.getPage();
    return this.getType() === 'topstories' ?
      this.props.getCachedTopPage(pageNumber) : this.props.getCachedNewPage(pageNumber);
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
    const { isFetching } = this.props;
    const cachedStories = this.fetchCachedStories();
    if (isFetching && !cachedStories.length) {
      return (
        <Spinner />
      );
    }

    return (
      <NewsList
        news={cachedStories}
        page={this.getPage()}
        pageCount={this.getPageCount()}
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
  topPageCount: getTopPageCount(state),
  newPageCount: getNewPageCount(state),
  getCachedTopPage: (id: number) => getCachedTopPage(state, id),
  getCachedNewPage: (id: number) => getCachedNewPage(state, id),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetch: (type: string, page: number) => {
    dispatch(fetchNews(type, page));
  },
});

const NewsFeed = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsFeedWrapper));

export default NewsFeed;
