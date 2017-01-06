export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_FULFILLED = 'FETCH_COMMENTS_FULFILLED';

export const fetchComments = (id: string): CommentFetchRequestAction => ({
  type: FETCH_COMMENTS,
  payload: id,
});

export const fetchCommentsFulfilled = (res: CommentItem[]) => ({
  type: FETCH_COMMENTS_FULFILLED,
  payload: res,
});
