import {combineReducers} from 'redux';
import {FETCH_NEWS, FETCH_NEWS_FULFILLED} from '../actions/news';
import {FETCH_COMMENTS, FETCH_COMMENTS_FULFILLED} from '../actions/comments';

const createRootReducer = () => {
  const news = (state: Story[] = [], action: Action<Payload>) => {
    switch (action.type) {
      case FETCH_NEWS:
        return state;
      case FETCH_NEWS_FULFILLED:
        return action.payload;
      default:
        return state;
    }
  };

  const comments = (state: CommentItem[] = [], action: Action<Payload>) => {
    switch (action.type) {
      case FETCH_COMMENTS:
        return state;
      case FETCH_COMMENTS_FULFILLED:
        return action.payload;
      default:
        return state;
    }
  };

  const isFetching = (state: boolean = false, action: Action<Payload>) => {
    switch (action.type) {
      case FETCH_NEWS:
        return true;
      case FETCH_NEWS_FULFILLED:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    comments,
    news,
    isFetching,
  });
};

export default createRootReducer;

export const getNewsList = (state: State) => {
  return state.news;
};

export const getIsFetching = (state: State) => {
  return state.isFetching;
};

export const getComments = (state: State) => {
  return state.comments;
};
