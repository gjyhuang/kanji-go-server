const User = require("./user");
const DeckList = require("./deckList");
const Deck = require("./deck");
const DeckStatus = require("./deckStatus");
const DeckListDeck = require("./deckListDeck");
const Card = require("./card");
const CardStatus = require("./cardStatus");
const DeckCard = require("./deckCard");
const Example = require("./example");
const CardExample = require("./cardExample");

// each user has many deck lists -> through table for decks <-> users
User.hasOne(DeckList);

// each deck can be in many deck lists -> through table for deckLists <-> decks
Deck.belongsToMany(DeckList, {
  through: "deckListDeck",
  foreignKey: "deckId"
});
DeckList.belongsToMany(Deck, {
  through: "deckListDeck"
});

// associate deckStatus with deck via the through table
DeckStatus.hasOne(DeckListDeck, {
  as: "deckStatusId"
});

// each deck has many unique cards
// through table for decks <-> cards
Deck.belongsToMany(Card, {
  through: "deckCard"
});
Card.belongsToMany(Deck, {
  through: "deckCard"
});

// associate cardStatus with card via the through table
CardStatus.hasOne(DeckCard, {
  as: "cardStatusId"
});

// each card can have many examples
// through table for cards <-> examples
Card.belongsToMany(Example, {
  through: "cardExample"
});
Example.belongsToMany(Card, {
  through: "cardExample"
});

module.exports = {
  User,
  DeckList,
  Deck,
  DeckListDeck,
  DeckStatus,
  Card,
  CardStatus,
  DeckCard,
  Example,
  CardExample
};
