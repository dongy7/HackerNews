import {connect} from 'react-redux';
import NewsList from '../components/NewsList';
import {fetchNews} from '../actions/news';
import {getNewsList} from '../reducers';

const mapStateToProps = (state: State) => ({
  news: getNewsList(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetch: (type: string) => {
    dispatch(fetchNews(type));
  },
});

const NewsFeed = connect(mapStateToProps, mapDispatchToProps)(NewsList);

export default NewsFeed;
