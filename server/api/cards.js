const router = require("express").Router();
const { Deck, Card } = require("../db/models/index");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      include: [
        {
          model: Deck,
          required: false
        }
      ]
    });
    res.json(cards);
  } catch (err) {
    next(err);
  }
});

// add a card (without examples)
router.post("/", async (req, res, next) => {
  try {
    const {
      type,
      content,
      definition,
      furigana,
      partOfSpeech,
      radical,
      tags
    } = req.body;
    const newCard = await Card.create({
      type,
      content,
      definition,
      furigana,
      partOfSpeech,
      radical,
      tags
    });
    res.status(200).json(newCard);
  } catch (err) {
    next(err);
  }
});

router.put("/:cardId", (req, res, next) => {
  res.send("Hello put");
});

router.delete("/:cardId", (req, res, next) => {
  res.send("Goodbye world");
});
