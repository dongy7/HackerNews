import createCategoryReducer from './createCategory';

describe('news category reducer', () => {
  it('should return the initial state', () => {
    expect(createCategoryReducer('foo')(undefined, {
      type: 'foo'
    })).toEqual({
      pageAt: 1, pageCount: 1, cachedNews: {}
    });
  });

  it('should update page count on request fulfillment', () => {
    const category = 'foo';
    const pageCount = 100;
    expect(createCategoryReducer(category)(undefined, {
      type: 'FETCH_PAGE_COUNT_FULFILLED',
      payload: pageCount,
      metadata: category,
    })).toEqual({
      pageAt: 1, pageCount: pageCount, cachedNews: {}
    });
  });

  it('should not update page count on request fulfillment if category does not match', () => {
    const category = 'foo';
    const pageCount = 100;
    expect(createCategoryReducer(category)(undefined, {
      type: 'FETCH_PAGE_COUNT_FULFILLED',
      payload: pageCount,
      metadata: 'bar',
    })).toEqual({
      pageAt: 1, pageCount: 1, cachedNews: {}
    });
  });

  it('should update news cache on request fulfillment', () => {
    const category = 'foo';
    const res = [{ title: 'foo' }];
    const id = 10;
    expect(createCategoryReducer(category)(undefined, {
      type: 'FETCH_NEWS_FULFILLED',
      payload: res,
      metadata: { type: category, id },
    })).toEqual({
      pageAt: 1, pageCount: 1, cachedNews: { [id]: res }
    });
  });

  it('should not update news cache on request fulfillment if category does not match', () => {
    const category = 'foo';
    const res = [{ title: 'foo' }];
    const id = 10;
    expect(createCategoryReducer(category)(undefined, {
      type: 'FETCH_NEWS_FULFILLED',
      payload: res,
      metadata: { type: 'bar', id },
    })).toEqual({
      pageAt: 1, pageCount: 1, cachedNews: {}
    });
  });
});
