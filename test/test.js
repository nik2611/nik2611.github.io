const deck = require('../deck.js');

QUnit.module('deck');

QUnit.test('two numbers', assert => {
  assert.equal(deck(1, 2), 3);
});