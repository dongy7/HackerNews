import {combineReducers} from 'redux';
import {FETCH_NEWS, FETCH_NEWS_FULFILLED} from '../actions/news';
import {FETCH_STORY, FETCH_STORY_FULFILLED} from '../actions/story';
import {CHANGE_NAV, CLOSE_NAV, TOGGLE_NAV} from '../actions/nav';

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

  const story = (state: Story|null = null, action: Action<Payload>) => {
    switch (action.type) {
      case FETCH_STORY:
        return state;
      case FETCH_STORY_FULFILLED:
        return action.payload;
      default:
        return state;
    }
  };

  const isFetching = (state: boolean = false, action: Action<Payload>) => {
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

  const nav = (state: boolean = false, action: Action<Payload>) => {
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

  return combineReducers({
    news,
    isFetching,
    story,
    nav,
  });
};

export default createRootReducer;

export const getNewsList = (state: State) => {
  return state.news;
};

export const getIsFetching = (state: State) => {
  return state.isFetching;
};

export const getStory = (state: State) => {
  return state.story;
};

export const getNavStatus = (state: State) => {
  return state.nav;
};
