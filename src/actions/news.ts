export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_NEWS_FULFILLED = 'FETCH_NEWS_FULFILLED';

export const fetchNews = (type: string, page: number): NewsFetchRequestAction => ({
  type: FETCH_NEWS,
  payload: type,
  metadata: page,
});

export const fetchNewsFulfilled = (res: Story[]): NewsFetchFulfilledAction  => ({
  type: FETCH_NEWS_FULFILLED,
  payload: res,
  metadata: null,
});
