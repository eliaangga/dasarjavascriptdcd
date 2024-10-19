import sum from './index.js';
import { strict as assert } from 'node:assert';
import test from 'node:test';

test('Testing sum function - positive numbers', () => {
  // uji sum 2 angka posituf
  assert.equal(sum(2, 3), 5);
  assert.equal(sum(10, 20), 30);
});

test('Testing sum function - zero values', () => {
  // uji sum angka 0
  assert.equal(sum(0, 0), 0);
  assert.equal(sum(5, 0), 5);
  assert.equal(sum(0, 5), 5);
});

test('Testing sum function - negative numbers', () => {
  // uji sum dgn angka negatif (hasil harus 0)
  assert.equal(sum(-1, 3), 0);
  assert.equal(sum(3, -1), 0);
  assert.equal(sum(-5, -10), 0);
});

test('Testing sum function - non-number inputs', () => {
  // uji sum dgn input bukan angka (hasil harus 0)
  assert.equal(sum('a', 5), 0);
  assert.equal(sum(5, 'b'), 0);
  assert.equal(sum('a', 'b'), 0);
  assert.equal(sum(null, undefined), 0);
  assert.equal(sum({}, []), 0);
});

test('Testing sum function - edge cases', () => {
  // uji sum dgn kasus ekstrem
  assert.equal(sum(Number.MAX_SAFE_INTEGER, 1), Number.MAX_SAFE_INTEGER + 1);
  assert.equal(sum(Number.MIN_SAFE_INTEGER, 0), Number.MIN_SAFE_INTEGER);
});
