const Sequelize = require("sequelize");
const db = require("../db");

const DeckCard = db.define("deckCard", {
  deckId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "deck",
      key: "id"
    }
  },
  cardId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "card",
      key: "id"
    }
  },
  cardStatusId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "cardStatus",
      key: "id"
    }
  }
});

module.exports = DeckCard;
