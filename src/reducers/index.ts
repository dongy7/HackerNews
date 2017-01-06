import {combineReducers} from 'redux';
import {FETCH_NEWS_FULFILLED, FETCH_NEWS} from '../actions/news';

const createRootReducer = () => {
  const news = (state = [], action: Action<any>) => {
    switch (action.type) {
      case FETCH_NEWS:
        console.log('fetching');
        return state;
      case FETCH_NEWS_FULFILLED:
        console.log(action.payload);
        return state;
      default:
        return state;
    }
  };

  return combineReducers({
    news,
  });
};

export default createRootReducer;

export const getNewsList = (state: State) => {
  return state.news;
};
