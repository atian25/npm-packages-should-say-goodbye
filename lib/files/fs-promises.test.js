import assert from 'assert/strict';
import fsPromise from 'fs/promises';
import { dirname } from 'dirname-filename-esm';
import path from 'path';

describe('types/fs-promises.test.js', () => {
  const fixtures = path.join(dirname(import.meta), 'fixtures');

  it('fs/promises', async () => {
    await fsPromise.exists('/path/to/file');
    await fsPromise.readFile('/path/to/file');
    await fsPromise.writeFile('/path/to/file', 'some text');
  });
});
