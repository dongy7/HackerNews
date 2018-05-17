import * as Rx from 'rxjs';
import { FETCH_NEWS, fetchPageCountFulfilled } from '../actions/news';
import { baseUrl } from '../api';
export const fetchPageCountEpic = (action$) => action$.ofType(FETCH_NEWS)
    .flatMap((action) => Rx.Observable.ajax(`${baseUrl}/${action.payload}.json`)
    .map(res => res.response.length)
    .map(res => fetchPageCountFulfilled(res, action.payload)));
