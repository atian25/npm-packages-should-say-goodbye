import assert from 'assert/strict';
import is from 'is-type-of';

describe('types/is-type-of.test.js', () => {
  it('is-type-of', () => {
    assert(is.regexp(/.*/));
    assert(is.asyncFunction(async () => {}));
    assert(is.string('a str'));
  });
});
