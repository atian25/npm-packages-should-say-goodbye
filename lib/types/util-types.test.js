import assert from 'assert/strict';
import types from 'util/types';

describe('types/util-types.test.js', () => {
  it('util/types', () => {
    assert(types.isRegExp(/.*/));
    assert(types.isAsyncFunction(async () => { }));

    // `types.isString` is not implemented, `util.isString` is deparated.
    assert(typeof 'a str' === 'string');
  });
});
