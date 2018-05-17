import * as Rx from 'rxjs'
import {
  FETCH_STORY,
  FETCH_STORY_REJECTED,
  fetchStoryFulfilled
} from '../actions/story'
import { itemUrl } from '../api'
export const fetchStoryEpic = action$ =>
  action$.ofType(FETCH_STORY).flatMap(action =>
    Rx.Observable.fromPromise(fetch(`${itemUrl}/${action.payload}`))
      .flatMap(res => {
        if (!res.ok) {
          return Rx.Observable.throw(`Error: ${res.status}`)
        }
        return res.json()
      })
      .takeLast(1)
      .map(res => fetchStoryFulfilled(res))
      .catch(err => {
        return Rx.Observable.of({
          type: FETCH_STORY_REJECTED,
          payload: err
        })
      })
  )
