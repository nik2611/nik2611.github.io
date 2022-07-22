
//Initialised required card arrays
const cardSuits = ['♤', '♥', '♦', '♧'];
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suitValues = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };


// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  let startBtn = document.getElementById("start");
  let drawBtn = document.getElementById("draw");

  let cards = new Deck(cardNumbers, cardSuits, suitValues);
  console.log(cards.cards());
  cards.cards();

  console.log(cards.shuffle());
  let shuffledCards = cards.shuffle();

  // Start Game button event listening
  startBtn.addEventListener("click", () => {
    document.getElementById("uCard").innerText = `Cards shuffled Please draw`;
    document.getElementById("cCard").innerText = `Cards shuffled Please draw`;
    document.getElementById("uPoint").innerText = "0";
    document.getElementById("cPoint").innerText = "0";

  });

   // Draw Game button event listening
   drawBtn.addEventListener("click", function () {

    // The below makes the draw event happen and gives points to
    // players based on who got the highest value card
    if (shuffledCards.length !== 0) {
      const user = shuffledCards.pop();
      console.log(`User Value: ${user.value}`);
      document.getElementById("uCard").innerText = user.display;

      const computer = shuffledCards.pop();
      console.log(`Computer Value: ${computer.value}`);
      document.getElementById("cCard").innerText = computer.display;

      if (user.value > computer.value) {
        let val = document.getElementById("uPoint").innerText;
        val = parseInt(val);
        val = val + 1;
        document.getElementById("uPoint").innerText = val;
      }
      else {
        let val = document.getElementById("cPoint").innerText;
        val = parseInt(val);
        val = val + 1;
        document.getElementById("cPoint").innerText = val;

      }
    }

    // If there are no more cards to draw, the below displays who won
    else {
      let finalUPoint = document.getElementById("uPoint").innerText;
      let finalCPoint = document.getElementById("cPoint").innerText;
      finalUPoint = parseInt(finalUPoint);
      finalCPoint = parseInt(finalCPoint);

      if (finalUPoint > finalCPoint) {
        document.getElementById("uCard").innerText = `You Won!!!`;
      }
      else if (finalUPoint === finalCPoint) {
        document.getElementById("uCard").innerText = `Game Draw!!!`;
        document.getElementById("cCard").innerText = `Game Draw!!!`;
      }
      else {
        document.getElementById("cCard").innerText = `Computer Won!!!`;
      }

    }
  });

});


// Deck class defintion
class Deck {
  constructor(numbers, suits, suitVal) {
    this.numbers = numbers;
    this.suits = suits;
    this.suitVal = suitVal;
  }

  cards() {
    const result = [];
    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.suits.length; j++) {
        let value = isNaN(this.numbers[i]) ? this.suitVal[this.numbers[i]] : parseInt(this.numbers[i], 10);
        result.push({ display: this.numbers[i] + this.suits[j], value });
      }
    };
    this.deckOfCards = result;
    return result;
  }

  shuffle() {
    let shuffled = this.deckOfCards.sort(function () { return 0.5 - Math.random() });
    return shuffled;
  }
}


module.exports = Deck;



