import {FETCH_STORY, FETCH_STORY_FULFILLED} from '../actions/story';

const story = (state: Story|null = null, action: ReduxAction) => {
  switch (action.type) {
    case FETCH_STORY:
      return state;
    case FETCH_STORY_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export default story;
