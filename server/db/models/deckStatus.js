const Sequelize = require("sequelize");
const db = require("../db");

const DeckStatus = db.define("deckStatus", {
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.STRING
  }
});

module.exports = DeckStatus;
