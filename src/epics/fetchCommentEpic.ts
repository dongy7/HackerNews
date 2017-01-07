import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_COMMENTS, fetchCommentsFulfilled} from '../actions/comments';
import {itemUrl} from '../api';

export const fetchCommentEpic = (action$: ActionsObservable<Action<Payload>>) =>
  action$.ofType(FETCH_COMMENTS)
    .flatMap((action: CommentFetchRequestAction) =>
      Rx.Observable.ajax(`${itemUrl}/${action.payload}.json`)
        .flatMap(res => Rx.Observable.of(res.response))
        .concatMap((res: Story) => Rx.Observable.from(res.kids))
        .concatMap(commentId => Rx.Observable.ajax(`${itemUrl}/${commentId}.json`))
        .map(res => res.response)
        .scan(
          (acc: CommentItem[], curr) => {
            acc.push(curr);
            return acc;
          },
          []
        )
        .takeLast(1)
        .map(res => {
          return fetchCommentsFulfilled(res);
        })
    );
