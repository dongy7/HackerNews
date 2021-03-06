import * as Rx from 'rxjs'
import {
  FETCH_NEWS,
  FETCH_NEWS_REJECTED,
  fetchNewsFulfilled
} from '../actions/news'
import { CHANGE_PAGE } from '../actions/nav'
import { baseUrl, itemUrl } from '../api'
/**
 * Fetches the first n articles
 * concatMap used to order the requests
 */
export const fetchNewsEpic = action$ =>
  action$.ofType(FETCH_NEWS).flatMap(action =>
    Rx.Observable.ajax(`${baseUrl}/${action.payload}.json`)
      .concatMap(res => Rx.Observable.from(res.response))
      .skip(10 * (action.metadata - 1))
      .take(10)
      .concatMap(id => Rx.Observable.ajax(`${itemUrl}/${id}`))
      .map(res => res.response)
      .scan((acc, curr) => {
        acc.push(curr)
        return acc
      }, [])
      .takeLast(1)
      .map(res => fetchNewsFulfilled(res, action.payload, action.metadata || 1)) // TODO: avoid short circuit
      .takeUntil(action$.ofType(CHANGE_PAGE))
      .catch(err => {
        return Rx.Observable.of({
          type: FETCH_NEWS_REJECTED,
          payload: err.message
        })
      })
  )
