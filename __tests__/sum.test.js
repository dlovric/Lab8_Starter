// sum.test.js
//const sum = require('../scripts/sum.js');

function sum(a,b){
  return a+b;
}

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

