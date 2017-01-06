import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_COMMENTS, fetchCommentsFulfilled} from '../actions/comments';
import {itemUrl} from '../api';

export const fetchCommentEpic = (action$: ActionsObservable<Action<Payload>>) =>
  action$.ofType(FETCH_COMMENTS)
    .flatMap((action: CommentFetchRequestAction) =>
      Rx.Observable.ajax(`${itemUrl}/${action.payload}.json`)
        .flatMap(res => Rx.Observable.from(res.response))
        .map((res: Story) => res.kids)
        .concatMap(commentId => Rx.Observable.ajax(`${itemUrl}/${commentId}.json`))
        .scan(
          (acc: CommentItem[], curr) => {
            acc.push(curr);
            return acc;
          },
          []
        )
        .takeLast(1)
        .map(res => fetchCommentsFulfilled(res))
    );
