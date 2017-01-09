import * as actions from '../../src/actions/story';

describe('actions', () => {
  it('should create an action to fetch a story', () => {
    const id = '1';
    const expectedAction = {
      type: actions.FETCH_STORY,
      payload: id,
    };

    expect(actions.fetchStory(id)).toEqual(expectedAction);
  });

  it('should create an action to fulfill a story fetch request', () => {
    const story = {
      "id": 8804,
      "title": "The Meaning of Money",
      "points": 5,
      "user": "aquarin",
      "time": 1175699342,
      "time_ago": "10 years ago",
      "type": "link",
      "url": "http://aquaviva.wordpress.com/2007/04/01/the-meaning-of-money/",
      "domain": "aquaviva.wordpress.com",
      "comments": [],
      "comments_count": 0
    };

    const expectedAction = {
      type: actions.FETCH_STORY_FULFILLED,
      payload: story,
    };

    expect(actions.fetchStoryFulfilled(story)).toEqual(expectedAction);
  });
});
