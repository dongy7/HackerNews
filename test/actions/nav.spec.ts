import * as actions from '../../src/actions/nav';

describe('actions', () => {
  it('should create an action to toggle the nav', () => {
    const expectedAction = {
      type: actions.TOGGLE_NAV,
    };

    expect(actions.toggle()).toEqual(expectedAction);
  });

  it('should create an action to change the nav state', () => {
    const status = true;
    const expectedAction = {
      type: actions.CHANGE_NAV,
      payload: status,
    };

    expect(actions.change(status)).toEqual(expectedAction);
  });

  it('should create an action to close the nav', () => {
    const expectedAction = {
      type: actions.CLOSE_NAV,
    };

    expect(actions.close()).toEqual(expectedAction);
  });

  it('should create an action to change the page', () => {
    const expectedAction = {
      type: actions.CHANGE_PAGE,
    };

    expect(actions.changePage()).toEqual(expectedAction);
  });
});
