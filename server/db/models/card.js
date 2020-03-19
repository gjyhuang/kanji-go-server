const Sequelize = require("sequelize");
const db = require("../db");

const Card = db.define("card", {
  type: {
    type: Sequelize.ENUM("kanji", "vocab", "custom")
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  definition: {
    type: Sequelize.STRING,
    allowNull: false
  },
  furigana: {
    type: Sequelize.STRING,
    allowNull: false
  },
  partOfSpeech: {
    type: Sequelize.STRING
  },
  radical: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = Card;
