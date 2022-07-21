const Deck = require('../deck.js');

QUnit.module('Deck');

QUnit.test('two numbers', assert => {
  assert.equal(deck(1, 2), 3);
});