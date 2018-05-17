import { combineReducers } from 'redux'
import storyReducer from './story'
import navReducer from './nav'
import createCategory from './createCategory'
import statusReducer from './status'
const createRootReducer = () => {
  return combineReducers({
    story: storyReducer,
    nav: navReducer,
    newCategory: createCategory('newstories'),
    topCategory: createCategory('topstories'),
    status: statusReducer
  })
}
export default createRootReducer
export const getIsFetching = state => {
  return state.status.isFetching
}
export const getStory = state => {
  return state.story
}
export const getNavStatus = state => {
  return state.nav
}
export const getTopPageCount = state => {
  return state.topCategory.pageCount
}
export const getNewPageCount = state => {
  return state.newCategory.pageCount
}
export const getCachedTopPage = (state, pageNumber) => {
  return state.topCategory.cachedNews[pageNumber] || []
}
export const getCachedNewPage = (state, pageNumber) => {
  return state.newCategory.cachedNews[pageNumber] || []
}
export const getError = state => {
  return state.status.error
}
export const getErrMsg = state => {
  return state.status.msg
}
