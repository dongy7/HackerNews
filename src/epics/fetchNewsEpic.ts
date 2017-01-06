import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_NEWS, fetchNewsFulfilled} from '../actions/news';

export const fetchNewsEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(FETCH_NEWS)
    .mergeMap((action: Action) =>
      Rx.Observable.fromPromise(fetch(`https://hacker-news.firebaseio.com/v0/${action.payload}`))
        .map(res => fetchNewsFulfilled(res))
    );
