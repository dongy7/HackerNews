import navReducer from '../../src/reducers/nav';

describe('navigation reducer', () => {
  it('should return the initial state', () => {
    expect(navReducer(undefined, {
      type: 'FOO', payload: 'foo', metadata: undefined
    })).toEqual(false);
  });
});
