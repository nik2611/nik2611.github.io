//module.exports = cards.cards;

//Initialised required card arrays
const cardSuits = ['♤', '♥', '♦', '♧'];
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suitValues = {'J': 11, 'Q': 12, 'K': 13, 'A': 14};

class deck {
  constructor(numbers, suits, suitVal) { 
    this.numbers = numbers;
    this.suits = suits;
    this.suitVal = suitVal;
  }

  cards() {
     const result = [];
     for(let i=0; i<this.numbers.length; i++){
      for(let j=0; j<this.suits.length; j++){
        let value = isNaN(this.numbers) ? this.suitVal[this.numbers] : parseInt(this.numbers, 10);
        result.push({display: this.numbers + this.suits, value});
      }
     };
     return result;
  }
}

let cards = new deck(cardNumbers, cardSuits, suitValues);
console.log(cards.cards());


  
  