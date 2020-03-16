const Sequelize = require("sequelize");
const db = require("../db");

const DeckList = db.define("deckList", {
  deckId: {
    type: Sequelize.UUID,
    allowNull: false
  }
});

module.exports = DeckList;
