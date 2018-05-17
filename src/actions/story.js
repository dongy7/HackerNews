export const FETCH_STORY = 'FETCH_STORY'
export const FETCH_STORY_FULFILLED = 'FETCH_STORY_FULFILLED'
export const FETCH_STORY_REJECTED = 'FETCH_STORY_REJECTED'
export const fetchStory = id => ({
  type: FETCH_STORY,
  payload: id
})
export const fetchStoryFulfilled = story => ({
  type: FETCH_STORY_FULFILLED,
  payload: story
})
