const Sequelize = require("sequelize");
const db = require("../db");

const Card = db.define("card", {
  type: {
    type: Sequelize.ENUM("kanji", "vocab", "custom")
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
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
  examples: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  examplesTranslation: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = Card;
