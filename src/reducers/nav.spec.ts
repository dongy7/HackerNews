import navReducer from './nav';
import * as actions from '../actions/nav';

describe('navigation reducer', () => {
  it('should return the initial state', () => {
    expect(navReducer(undefined, {
      type: 'FOO', payload: 'foo', metadata: undefined
    })).toEqual(false);
  });

  it('should toggle nav state', () => {
    expect(navReducer(true, {
      type: actions.TOGGLE_NAV,
    })).toBe(false);

    expect(navReducer(false, {
      type: actions.TOGGLE_NAV,
    })).toBe(true);
  });

  it('should change nav status', () => {
    expect(navReducer(true, {
      type: actions.CHANGE_NAV,
      payload: false,
    })).toBe(false);

    expect(navReducer(false, {
      type: actions.CHANGE_NAV,
      payload: false,
    })).toBe(false);

    expect(navReducer(true, {
      type: actions.CHANGE_NAV,
      payload: true,
    })).toBe(true);

    expect(navReducer(false, {
      type: actions.CHANGE_NAV,
      payload: true,
    })).toBe(true);
  });

  it('should close the nav', () => {
    expect(navReducer(true, {
      type: actions.CLOSE_NAV,
    })).toBe(false);

    expect(navReducer(false, {
      type: actions.CLOSE_NAV,
    })).toBe(false);
  });
});
