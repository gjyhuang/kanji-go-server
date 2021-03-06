const Sequelize = require("sequelize");
const db = require("../db");

const Deck = db.define("deck", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
});

module.exports = Deck;
