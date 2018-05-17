import { combineReducers } from 'redux'
import {
  FETCH_NEWS,
  FETCH_NEWS_FULFILLED,
  FETCH_NEWS_REJECTED
} from '../actions/news'
import {
  FETCH_STORY,
  FETCH_STORY_REJECTED,
  FETCH_STORY_FULFILLED
} from '../actions/story'
import { CLOSE_DIALOG } from '../actions/dialog'
const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_NEWS:
    case FETCH_STORY:
      return true
    case FETCH_NEWS_FULFILLED:
    case FETCH_STORY_FULFILLED:
      return false
    default:
      return state
  }
}
const error = (state = false, action) => {
  switch (action.type) {
    case FETCH_NEWS_REJECTED:
    case FETCH_STORY_REJECTED:
      return true
    case CLOSE_DIALOG:
      return false
    default:
      return state
  }
}
const msg = (state = '', action) => {
  switch (action.type) {
    case FETCH_NEWS_REJECTED:
    case FETCH_STORY_REJECTED:
      return action.payload || ''
    default:
      return state
  }
}
const status = combineReducers({
  isFetching,
  error,
  msg
})
export default status
