const router = require("express").Router();
const { Deck, Card, Example } = require("../db/models/index");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      include: [
        {
          model: Deck,
          required: false
        },
        {
          model: Example,
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

router.get("/:cardId", async (req, res, next) => {
  try {
    const card = await Card.findByPk(req.params.cardId, {
      include: [{ model: Deck }]
    });
    res.json(card);
  } catch (err) {
    next(err);
  }
});

router.put("/:cardId", async (req, res, next) => {
  try {
    const { cardId } = req.params;
    const cardToUpdate = await Card.findByPk(cardId);
    const {
      type,
      content,
      definition,
      furigana,
      partOfSpeech,
      radical,
      tags
    } = req.body;
    const updatedData = {
      type,
      content,
      definition,
      furigana,
      partOfSpeech,
      radical,
      tags
    };
    cardToUpdate.update(updatedData);
    res.status(200).json(cardToUpdate);
  } catch (err) {
    next(err);
  }
});

router.delete("/:cardId", async (req, res, next) => {
  try {
    const { cardId } = req.params;
    await Card.destroy({
      where: { id: cardId }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
