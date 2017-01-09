import * as actions from '../../src/actions/dialog';

describe('actions', () => {
  it('should create an action to close the dialog', () => {
    const expectedAction = {
      type: actions.CLOSE_DIALOG,
    };

    expect(actions.closeDialog()).toEqual(expectedAction);
  });
});
