import {combineReducers} from 'redux';
import {FETCH_NEWS_FULFILLED, FETCH_NEWS} from '../actions/news';

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
