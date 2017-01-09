import {combineReducers} from 'redux';
import {FETCH_NEWS, FETCH_NEWS_FULFILLED, FETCH_NEWS_REJECTED, FETCH_PAGE_COUNT_FULFILLED} from '../actions/news';
import {FETCH_STORY, FETCH_STORY_REJECTED, FETCH_STORY_FULFILLED} from '../actions/story';
import {CHANGE_NAV, CLOSE_NAV, TOGGLE_NAV} from '../actions/nav';
import {CLOSE_DIALOG} from '../actions/dialog';

const createRootReducer = () => {
  const story = (state: Story|null = null, action: Action<Payload, MetaData>) => {
    switch (action.type) {
      case FETCH_STORY:
        return state;
      case FETCH_STORY_FULFILLED:
        return action.payload;
      default:
        return state;
    }
  };

  const isFetching = (state: boolean = false, action: Action<Payload, MetaData>) => {
    switch (action.type) {
      case FETCH_NEWS:
      case FETCH_STORY:
        return true;
      case FETCH_NEWS_FULFILLED:
      case FETCH_STORY_FULFILLED:
        return false;
      default:
        return state;
    }
  };

  const nav = (state: boolean = false, action: Action<Payload, MetaData>) => {
    switch (action.type) {
      case CHANGE_NAV:
        return action.payload;
      case CLOSE_NAV:
        return false;
      case TOGGLE_NAV:
        return !state;
      default:
        return state;
    }
  };

  const topCategory = (state: Category = {
    type: 'topstories', pageAt: 1, pageCount: 50, cachedNews: {}
  }, action: Action<Payload, MetaData>) => {
    switch (action.type) {
      case FETCH_PAGE_COUNT_FULFILLED:
        if (action.metadata === state.type) {
          return Object.assign({}, state, {
            pageCount: action.payload,
          });
        }
        return state;
      case FETCH_NEWS_FULFILLED:
        const fetchedAction = <NewsFetchFulfilledAction> action;
        if (fetchedAction.metadata.type === 'topstories') {
          const newCache = Object.assign({}, state.cachedNews, {
            [fetchedAction.metadata.id]: fetchedAction.payload,
          });

          return Object.assign({}, state, {
            cachedNews: newCache,
          });
        }
        return state;
      default:
        return state;
    }
  };

  // TODO: Remove duplication
  const newCategory = (state: Category = {
    type: 'newstories', pageAt: 1, pageCount: 50, cachedNews: {}
  }, action: NewsFetchFulfilledAction|PageCountFetchFulfilledAction) => {
    switch (action.type) {
      case FETCH_PAGE_COUNT_FULFILLED:
        if (action.metadata === state.type) {
          return Object.assign({}, state, {
            pageCount: action.payload,
          });
        }
        return state;
      case FETCH_NEWS_FULFILLED:
        const fetchedAction = <NewsFetchFulfilledAction> action;
        if (fetchedAction.metadata.type === 'newstories') {
          const newCache = Object.assign({}, state.cachedNews, {
            [fetchedAction.metadata.id]: fetchedAction.payload,
          });

          return Object.assign({}, state, {
            cachedNews: newCache,
          });
        }
        return state;
      default:
        return state;
    }
  };

  const error = (state: boolean = false, action: Action<Payload, MetaData>) => {
    switch (action.type) {
      case FETCH_NEWS_REJECTED:
      case FETCH_STORY_REJECTED:
        return true;
      case CLOSE_DIALOG:
        return false;
      default:
        return state;
    }
  };

  const msg = (state: string = '', action: Action<Payload, MetaData>) => {
    switch (action.type) {
      case FETCH_NEWS_REJECTED:
      case FETCH_STORY_REJECTED:
        return action.payload;
      default:
        return state;
    }
  };

  return combineReducers({
    isFetching,
    story,
    nav,
    newCategory,
    topCategory,
    error,
    msg,
  });
};

export default createRootReducer;

export const getIsFetching = (state: State) => {
  return state.isFetching;
};

export const getStory = (state: State) => {
  return state.story;
};

export const getNavStatus = (state: State) => {
  return state.nav;
};

export const getTopPageCount = (state: State) => {
  return state.topCategory.pageCount;
};

export const getNewPageCount = (state: State) => {
  return state.newCategory.pageCount;
};

export const getCachedTopPage = (state: State, pageNumber: number) => {
  return state.topCategory.cachedNews[pageNumber] || [];
};

export const getCachedNewPage = (state: State, pageNumber: number) => {
  return state.newCategory.cachedNews[pageNumber] || [];
};

export const getError = (state: State) => {
  return state.error;
};

export const getErrMsg = (state: State) => {
  return state.msg;
};
