import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_NEWS, fetchNewsFulfilled} from '../actions/news';
import {CHANGE_PAGE} from '../actions/nav';
import {baseUrl, itemUrl} from '../api';

/**
 * Fetches the first n articles
 * concatMap used to order the requests
 */
export const fetchNewsEpic = (action$: ActionsObservable<Action<Payload, MetaData>>) =>
  action$.ofType(FETCH_NEWS)
    .flatMap((action: NewsFetchRequestAction) =>
      Rx.Observable.ajax(`${baseUrl}/${action.payload}.json`)
        .concatMap(res => Rx.Observable.from(res.response))
        .skip(10 * (action.metadata - 1))
        .take(10)
        .concatMap(id => Rx.Observable.ajax(`${itemUrl}/${id}`))
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
        .map(res => fetchNewsFulfilled(res, action.payload, action.metadata || 1)) // TODO: avoid short circuit
        .takeUntil(action$.ofType(CHANGE_PAGE))
    );
