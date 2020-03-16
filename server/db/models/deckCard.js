const Sequelize = require("sequelize");
const db = require("../db");

const DeckCard = db.define("deckCard", {
  deckId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "deck",
      key: "id"
    }
  },
  cardId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "card",
      key: "id"
    }
  }
});

module.exports = DeckCard;
