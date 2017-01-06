import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_NEWS, fetchNewsFulfilled} from '../actions/news';

/**
 * Fetches the first n articles
 */
export const fetchNewsEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(FETCH_NEWS)
    .flatMap((action: Action) =>
      Rx.Observable.ajax(`https://hacker-news.firebaseio.com/v0/${action.payload}.json`)
        .flatMap(res => Rx.Observable.from(res.response))
        .take(10)
        .flatMap(id => Rx.Observable.ajax(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
        .map(res => res.response)
        .scan((acc: Object[], curr) => {
          acc.push(curr);
          return acc;
        }, [])
        .takeLast(1)
        .map(res => fetchNewsFulfilled(res))
    );
