class Card {
  name = "";
  value;
  constructor(cardName, cardValue) {
    this.name = cardName;
    this.value = cardValue;
  }

  //Get the value of a card
  get getCardValue() {
    return this.value;
  }

  //Describe a card and give its value
  get getDescription() {
    return `the ${this.name} with a strength of ${this.value}`;
  }
}

class Deck {
  cards = [];
  constructor() {
    let cardSuitArray = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let cardNameArray = [
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    //Create deck of cards
    for (let suit of cardSuitArray) {
      let cardValue = 2;
      for (let name of cardNameArray) {
        let card = new Card(`${name} of ${suit}`, cardValue);
        this.cards.push(card);
        cardValue++;
      }
    }

    //Shuffle deck of cards
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }
}

class Player {
  name = "";
  hand = [];
  score;

  constructor(playerName) {
    this.name = playerName;
    this.score = 0;
  }

  //Get player name
  get getPlayerName() {
    return this.name;
  }

  //Get number of cards a player is holding
  get getHandSize() {
    return this.hand.length;
  }

  //Take drawn card and add it to player hand
  buildPlayerHand(drawnCard) {
    this.hand.push(drawnCard);
  }

  //Show the cards in player hands
  describeHand() {
    console.log(`${this.name} is holding the following cards:`);
    for (let card of this.hand) {
      console.log(card.getDescription);
    }
  }

  //Get player hand
  get getPlayerHand() {
    return this.hand;
  }

  //Add a point to the score
  addPoint() {
    this.score++;
    return this.score;
  }

  //Get player score
  get getPlayerScore() {
    return this.score;
  }
}

//Message making function
const messageMaker = (x) => {
  let count = "";
  for (let i = 0; i < 6 + x.length; i++) {
    count += "*";
  }
  console.log(count);
  console.log(`***${x}***`);
  console.log(count);
};

//Create instances of players
let player1 = new Player("Batman");
let player2 = new Player("Superman");

//Create instance of deck
let newDeck = new Deck();

//Messages for flavor
messageMaker("WELCOME to Tyrone's card game WAR!!!");
messageMaker(
  `${player1.getPlayerName} is Player 1 and ${player2.getPlayerName} is Player2`
);
messageMaker(
  `${player1.getPlayerName} and ${player2.getPlayerName} are drawing their cards`
);
messageMaker(
  `${player1.getPlayerName} and ${player2.getPlayerName} are ready to play!!`
);
//Draw a card from the deck and remove it from the deck
const drawCard = (deckOfCards) => {
  return deckOfCards.shift();
};

//Take drawn cards to build each players hands
for (let i = 52; i > 0; i--) {
  if (player2.getHandSize < player1.getHandSize) {
    player2.buildPlayerHand(drawCard(newDeck));
  } else {
    player1.buildPlayerHand(drawCard(newDeck));
  }
}

//Counter for while loop
let counter = 1;

//Compare top card from each players hand and score it appropriately
const flipCard = (player1Hand, player2Hand) => {
  while (counter < 27) {
    messageMaker(`ROUND: ${counter}`);
    let player1FlippedCard = drawCard(player1Hand);
    let player2FlippedCard = drawCard(player2Hand);
    console.log(
      `${player1.getPlayerName} flips over ${player1FlippedCard.getDescription}`
    );
    console.log(
      `${player2.getPlayerName} flips over ${player2FlippedCard.getDescription}`
    );
    if (player1FlippedCard.getCardValue > player2FlippedCard.getCardValue) {
      console.log(`${player1.getPlayerName} scores a point`);
      player1.addPoint();
    } else if (
      player1FlippedCard.getCardValue < player2FlippedCard.getCardValue
    ) {
      console.log(`${player2.getPlayerName} scores a point`);
      player2.addPoint();
    } else {
      console.log(`The value of both Players cards is the same`);
    }

    console.log(
      `${player1.getPlayerName}'s score is ${player1.getPlayerScore} and ${player2.getPlayerName}'s score is ${player2.getPlayerScore}`
    );

    counter++;
  }

  //Compare players scores to determine winner or draw
  if (player1.getPlayerScore > player2.getPlayerScore) {
    messageMaker(`${player1.getPlayerName} WINS!!!`);
  } else if (player1.getPlayerScore < player2.getPlayerScore) {
    messageMaker(`${player2.getPlayerName} WINS!!!`);
  } else {
    messageMaker(`The scores are tied - the game is a DRAW!!!`);
  }
};

//Calls the function that will pretty much run the game
flipCard(player1.getPlayerHand, player2.getPlayerHand);
