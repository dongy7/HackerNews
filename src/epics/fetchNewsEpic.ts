import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_NEWS, fetchNewsFulfilled} from '../actions/news';
import {baseUrl, itemUrl} from '../api';

/**
 * Fetches the first n articles
 * concatMap used to order the requests
 */
export const fetchNewsEpic = (action$: ActionsObservable<Action<Payload>>) =>
  action$.ofType(FETCH_NEWS)
    .flatMap((action: NewsFetchRequestAction) =>
      Rx.Observable.ajax(`${baseUrl}/${action.payload}.json`)
        .concatMap(res => Rx.Observable.from(res.response))
        .take(10)
        .concatMap(id => Rx.Observable.ajax(`${itemUrl}/${id}.json`))
        .map(res => res.response)
        .scan
        (
          (acc: Object[], curr) => {
            acc.push(curr);
            return acc;
          },
          []
        )
        .takeLast(1)
        .map(res => fetchNewsFulfilled(res))
    );
