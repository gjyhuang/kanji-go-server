const User = require("./user");
const DeckList = require("./deckList");
const Deck = require("./deck");
const DeckListDeck = require("./deckListDeck");
const Card = require("./card");
const DeckCard = require("./deckCard");

// each user has many deck lists -> through table for decks <-> users

User.hasOne(DeckList);

// each deck can be in many deck lists -> through table for deckLists <-> decks
Deck.belongsToMany(DeckList, {
  through: "deckListDeck",
  foreignKey: "deckId"
});
DeckList.belongsToMany(Deck, {
  through: "deckListDeck",
  foreignKey: "deckListId"
});

// each deck has many unique cards
// through table for decks <-> cards
Deck.belongsToMany(Card, {
  through: "deckCard",
  foreignKey: "deckId",
  otherKey: "cardId"
});

Card.belongsToMany(Deck, {
  through: "deckCard",
  as: "card",
  foreignKey: "cardId",
  otherKey: "deckId"
});

module.exports = {
  User,
  DeckList,
  Deck,
  DeckListDeck,
  Card,
  DeckCard
};
