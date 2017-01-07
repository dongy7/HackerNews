import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_COMMENTS, fetchCommentsFulfilled} from '../actions/comments';
import {itemUrl} from '../api';

export const fetchCommentEpic = (action$: ActionsObservable<Action<Payload>>) =>
  action$.ofType(FETCH_COMMENTS)
    .flatMap((action: CommentFetchRequestAction) =>
      Rx.Observable.ajax(`${itemUrl}/${action.payload}`)
        .flatMap(res => Rx.Observable.of(res.response))
        .map((res: Story) => res.comments)
        .takeLast(1)
        .map(res => fetchCommentsFulfilled(res))
    );
