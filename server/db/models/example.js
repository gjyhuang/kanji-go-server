const Sequelize = require("sequelize");
const db = require("../db");

const Example = db.define("example", {
  audio: {
    type: Sequelize.STRING
  },
  japanese: {
    type: Sequelize.STRING,
    allowNull: false
  },
  english: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = Example;
