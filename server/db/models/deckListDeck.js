const Sequelize = require("sequelize");
const db = require("../db");

const DeckListDeck = db.define("deckListDeck", {
  deckId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "deck",
      key: "id"
    }
  },
  deckListId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "deckList",
      key: "id"
    }
  }
});

module.exports = DeckListDeck;
