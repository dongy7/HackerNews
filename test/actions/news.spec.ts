import * as actions from '../../src/actions/news';

describe('actions', () => {
  it('should create an action to fetch a news page', () => {
    const newsType = 'best';
    const pageNumber = 1;
    const expectedAction: NewsFetchRequestAction = {
      type: actions.FETCH_NEWS,
      payload: newsType,
      metadata: pageNumber,
    };

    expect(actions.fetchNews(newsType, pageNumber)).toEqual(expectedAction);
  });

  it('should create an action to fulfill news fetch request', () => {
    const stories = [];
    const newsType = 'best';
    const pageNumber = 1;
    const expectedAction: NewsFetchFulfilledAction = {
      type: actions.FETCH_NEWS_FULFILLED,
      payload: stories,
      metadata: {
        type: newsType,
        id: pageNumber,
      },
    };

    expect(actions.fetchNewsFulfilled(stories, newsType, pageNumber)).toEqual(expectedAction);
  });

  it('should create an action to fulfill page count fetch request', () => {
    const pageCount = 10;
    const newsType = 'newest';
    const expectedAction: PageCountFetchFulfilledAction = {
      type: actions.FETCH_PAGE_COUNT_FULFILLED,
      payload: pageCount,
      metadata: newsType,
    };

    expect(actions.fetchPageCountFulfilled(pageCount, newsType)).toEqual(expectedAction);
  });
});
