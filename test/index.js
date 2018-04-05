const test = require('tape');
const { paginate, urlify } = require('../lib');

test('paginate returns whole array when size is equal to pageSize', (t) => {
  t.plan(1);
  const collection = [
    1, 2, 3,
  ];
  const pageSize = 3;
  const pageNumber = 1;

  const actual = paginate(collection, pageSize, pageNumber);
  const expected = [
    1, 2, 3,
  ];

  t.deepEquals(actual, expected);
});

test('paginate returns whole array when size is less than pageSize', (t) => {
  t.plan(1);
  const collection = [1, 2];
  const pageSize = 3;
  const pageNumber = 1;

  const actual = paginate(collection, pageSize, pageNumber);
  const expected = [1, 2];

  t.deepEquals(actual, expected);
});

test('paginate returns paged subset of collection', (t) => {
  t.plan(1);
  const collection = [
    1, 2, 3, 4, 5, 6, 7,
  ];
  const pageSize = 3;
  const pageNumber = 3;

  const actual = paginate(collection, pageSize, pageNumber);
  const expected = [7];

  t.deepEquals(actual, expected);
});

test('urlify should replace norwegian characters and spaces and convert to lowercase', (t) => {
  t.plan(1);
  t.equals(urlify('TEST ÆØÅæøå'), 'test-aeoeaaaeoeaa');
});