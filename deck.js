

//Initialised required card arrays
const cardSuits = ['♤', '♥', '♦', '♧'];
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suitValues = {'J': 11, 'Q': 12, 'K': 13, 'A': 14};

class Deck {
  constructor(numbers, suits, suitVal) { 
    this.numbers = numbers;
    this.suits = suits;
    this.suitVal = suitVal;
  }

  cards() {
     const result = [];
     for(let i=0; i<this.numbers.length; i++){
      for(let j=0; j<this.suits.length; j++){
        let value = isNaN(this.numbers[i]) ? this.suitVal[this.numbers[i]] : parseInt(this.numbers[i], 10);
        result.push({display: this.numbers[i] + this.suits[j], value});
      }
     };
     this.deckOfCards = result;
     return result;
  }

  shuffle() {
    let shuffled = this.deckOfCards.sort(function(){return 0.5 - Math.random()});
    return shuffled;
  }
}

let cards = new Deck(cardNumbers, cardSuits, suitValues);
console.log(cards.cards());

let deckOfCards = cards.cards();
console.log(cards.shuffle());
let shuffledCards = cards.shuffle();

const user = shuffledCards.pop();
console.log(`User Value: ${user.value}`);
const computer = shuffledCards.pop();
console.log(`Computer Value: ${computer.value}`);
if(user.value > computer.value){
  console.log("You Won!!!");
} else{
  console.log("Computer Won");
}



module.exports = Deck;


  
  