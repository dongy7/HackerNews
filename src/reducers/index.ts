import {combineReducers} from 'redux';
import storyReducer from './story';
import navReducer from './nav';
import createCategory from './createCategory';
import statusReducer from './status';

const createRootReducer = () => {
  return combineReducers({
    story: storyReducer,
    nav: navReducer,
    newCategory: createCategory('newstories'),
    topCategory: createCategory('topstories'),
    status: statusReducer,
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
