import { sum } from './index.js';
import { strict as assert } from 'node:assert';
import test from 'node:test';

test('Testing sum function', (t) => {
  // uji sum(2, 3) menghasilkan 5
  assert.equal(sum(2, 3), 5);

  // uji sum(-1, 1) apakah hasilny 0
  assert.equal(sum(-1, 1), 0);

  // uji apakah sum(0, 0) bisa hasilin 0
  assert.equal(sum(0, 0), 0);

  // uji dari sum(5, 10) utk ngehasilin 15
  assert.equal(sum(5, 10), 15);
});
