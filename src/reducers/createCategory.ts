import {FETCH_NEWS_FULFILLED, FETCH_PAGE_COUNT_FULFILLED} from '../actions/news';
import {combineReducers} from 'redux';

const createCategory = (type) => {
  const pageAt = (state: number = 1, action: ReduxAction) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const pageCount = (state: number = 1, action: ReduxAction) => {
    switch (action.type) {
      case FETCH_PAGE_COUNT_FULFILLED:
        if (action.metadata === type) {
          return action.payload;
        }

        return state;
      default:
        return state;
    }
  };

  const cachedNews = (state: NewsCache = {}, action: NewsFetchFulfilledAction) => {
    switch (action.type) {
      case FETCH_NEWS_FULFILLED:
        if (action.metadata.type === action.type) {
          return Object.assign({}, state, {
            [action.metadata.id]: action.payload,
          });
        }
        return state;
      default:
        return state;
    }
  };

  return combineReducers({
    pageAt,
    pageCount,
    cachedNews,
  });
};

export default createCategory;
