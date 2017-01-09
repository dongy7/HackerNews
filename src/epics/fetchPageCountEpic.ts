import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_NEWS, fetchPageCountFulfilled} from '../actions/news';
import {baseUrl} from '../api';

export const fetchNewsEpic = (action$: ActionsObservable<Action<Payload, MetaData>>) =>
  action$.ofType(FETCH_NEWS)
    .flatMap((action: NewsFetchRequestAction) =>
      Rx.Observable.ajax(`${baseUrl}/${action.payload}.json`)
        .map(res => res.response.length)
        .takeLast(1)
        .map(res => fetchPageCountFulfilled(res, action.payload))
    );
