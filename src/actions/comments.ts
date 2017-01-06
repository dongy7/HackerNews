export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_FULFILLED = 'FETCH_COMMENTS_FULFILLED';

export const fetchComments = (ids: number[]): CommentFetchRequestAction => ({
  type: FETCH_COMMENTS,
  payload: ids,
});

export const fetchCommentsFulfilled = (res: CommentItem[]) => ({
  type: FETCH_COMMENTS_FULFILLED,
  payload: res,
});
