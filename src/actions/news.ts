export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_NEWS_FULFILLED = 'FETCH_NEWS_FULFILLED';
export const FETCH_PAGE_COUNT_FULFILLED = 'FETCH_PAGE_COUNT_FULFILLED';

export const fetchNews = (type: string, page: number): NewsFetchRequestAction => ({
  type: FETCH_NEWS,
  payload: type,
  metadata: page,
});

export const fetchNewsFulfilled = (res: Story[]): NewsFetchFulfilledAction => ({
  type: FETCH_NEWS_FULFILLED,
  payload: res,
  metadata: null,
});

export const fetchPageCountFulfilled = (res: number, type: string): PageCountFetchFulfilledAction => ({
  type: FETCH_PAGE_COUNT_FULFILLED,
  payload: res,
  metadata: type,
});
