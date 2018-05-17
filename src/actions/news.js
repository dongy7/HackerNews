export const FETCH_NEWS = 'FETCH_NEWS'
export const FETCH_NEWS_FULFILLED = 'FETCH_NEWS_FULFILLED'
export const FETCH_NEWS_REJECTED = 'FETCH_NEWS_REJECTED'
export const FETCH_PAGE_COUNT_FULFILLED = 'FETCH_PAGE_COUNT_FULFILLED'
export const FETCH_PAGE_COUNT_REJECTED = 'FETCH_PAGE_COUNT_REJECTED'
export const fetchNews = (type, page) => ({
  type: FETCH_NEWS,
  payload: type,
  metadata: page
})
export const fetchNewsFulfilled = (res, type, id) => ({
  type: FETCH_NEWS_FULFILLED,
  payload: res,
  metadata: { type, id }
})
export const fetchPageCountFulfilled = (res, type) => ({
  type: FETCH_PAGE_COUNT_FULFILLED,
  payload: res,
  metadata: type
})
