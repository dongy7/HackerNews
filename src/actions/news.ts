export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_NEWS_FULFILLED = 'FETCH_NEWS_FULFILLED';

export const fetchNews = (type: string): Action => ({
  type: FETCH_NEWS,
  payload: type,
});

export const fetchNewsFulfilled = (res: Object): Action  => ({
  type: FETCH_NEWS_FULFILLED,
  payload: res,
});
