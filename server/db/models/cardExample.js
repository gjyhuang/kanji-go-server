const Sequelize = require("sequelize");
const db = require("../db");

const CardExample = db.define("cardExample", {
  cardId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "card",
      key: "id"
    }
  },
  exampleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "example",
      key: "id"
    }
  }
});

module.exports = CardExample;
