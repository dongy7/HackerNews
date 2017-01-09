import StoryReducer from './story';

describe('story reducer', () => {
  it('should return the initial state', () => {
    expect(StoryReducer(undefined, { type: 'foo' })).toEqual(null);
  });

  it('should update story on request fulfillment', () => {
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

    expect(StoryReducer(undefined, { type: 'FETCH_STORY_FULFILLED', payload: story })).toEqual(story);
  });
});
