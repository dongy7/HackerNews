export const FETCH_STORY = 'FETCH_STORY';
export const FETCH_STORY_FULFILLED = 'FETCH_STORY_FULFILLED';
export const FETCH_STORY_REJECTED = 'FETCH_STORY_REJECTED';

export const fetchStory = (id: string) => ({
  type: FETCH_STORY,
  payload: id,
});

export const fetchStoryFulfilled = (story: Story) => ({
  type: FETCH_STORY_FULFILLED,
  payload: story,
});
