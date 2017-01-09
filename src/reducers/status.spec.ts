import statusReducer from './status';
import {FETCH_NEWS, FETCH_NEWS_FULFILLED, FETCH_NEWS_REJECTED} from '../actions/news';
import {FETCH_STORY, FETCH_STORY_REJECTED, FETCH_STORY_FULFILLED} from '../actions/story';
import {CLOSE_DIALOG} from '../actions/dialog';

describe('status reducer', () => {
  it('should return the initial state', () => {
    expect(statusReducer(undefined, {
      type: 'FOO',
    })).toEqual({
      isFetching: false,
      error: false,
      msg: '',
    });
  });

  it('should update fetch state to true on request', () => {
    expect(statusReducer(undefined, {
      type: FETCH_NEWS,
    })).toEqual({
      isFetching: true,
      error: false,
      msg: '',
    });

    expect(statusReducer(undefined, {
      type: FETCH_STORY,
    })).toEqual({
      isFetching: true,
      error: false,
      msg: '',
    });
  });

  it('should update fetch state to false on request fulfillment', () => {
    expect(statusReducer(undefined, {
      type: FETCH_NEWS_FULFILLED
    })).toEqual({
      isFetching: false,
      error: false,
      msg: '',
    });

    expect(statusReducer(undefined, {
      type: FETCH_STORY_FULFILLED
    })).toEqual({
      isFetching: false,
      error: false,
      msg: '',
    });
  });

  it('should set error flag on request rejection', () => {
    expect(statusReducer(undefined, {
      type: FETCH_NEWS_REJECTED
    })).toEqual({
      isFetching: false,
      error: true,
      msg: '',
    });

    expect(statusReducer(undefined, {
      type: FETCH_STORY_REJECTED
    })).toEqual({
      isFetching: false,
      error: true,
      msg: '',
    });
  });

  it('should update error message on request rejection', () => {
    const msg = 'foo';
    expect(statusReducer(undefined, {
      type: FETCH_NEWS_REJECTED,
      payload: msg,
    })).toEqual({
      isFetching: false,
      error: true,
      msg: msg,
    });

    expect(statusReducer(undefined, {
      type: FETCH_STORY_REJECTED,
      payload: msg,
    })).toEqual({
      isFetching: false,
      error: true,
      msg: msg,
    });
  });

  it('should clear error flag on dialog close', () => {
    expect(statusReducer(undefined, {
      type: CLOSE_DIALOG,
    })).toEqual({
      isFetching: false,
      error: false,
      msg: '',
    });

    expect(statusReducer({ error: true }, {
      type: CLOSE_DIALOG,
    })).toEqual({
      isFetching: false,
      error: false,
      msg: '',
    });
  });
});
