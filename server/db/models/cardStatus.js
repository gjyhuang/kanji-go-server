const Sequelize = require("sequelize");
const db = require("../db");

const CardStatus = db.define("cardStatus", {
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.STRING
  }
});

module.exports = CardStatus;
