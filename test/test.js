//import Deck from "../deck.js";
const Deck = require('../deck.js');

QUnit.module('Deck');

const cardSuits = ['♤', '♥', '♦', '♧'];
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suitValues = {'J': 11, 'Q': 12, 'K': 13, 'A': 14};
const d = new Deck(cardNumbers, cardSuits, suitValues);
QUnit.test('two numbers', assert => {
  assert.equal(d, d);
});