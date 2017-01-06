export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_NEWS_FULFILLED = 'FETCH_NEWS_FULFILLED';

export const fetchNews = (type: string): NewsFetchRequestAction => ({
  type: FETCH_NEWS,
  payload: type,
});

export const fetchNewsFulfilled = (res: Story[]): NewsFetchFulfilledAction  => ({
  type: FETCH_NEWS_FULFILLED,
  payload: res,
});
