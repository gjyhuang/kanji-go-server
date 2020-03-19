const Sequelize = require("sequelize");
const db = require("../db");

const CardExample = db.define("cardExample", {
  cardId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "card",
      key: "id"
    }
  },
  exampleId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: "example",
      key: "id"
    }
  }
});

module.exports = CardExample;
