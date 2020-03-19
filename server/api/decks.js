const router = require("express").Router();
const { Deck, Card } = require("../db/models/index");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const decks = await Deck.findAll({
      include: [{ model: Card }]
    });
    res.json(decks);
  } catch (err) {
    next(err);
  }
});

// add a deck (without cards)
router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const newDeck = await Deck.create({ name, description });
    res.status(200).json(newDeck);
  } catch (err) {
    next(err);
  }
});

router.get("/:deckId", async (req, res, next) => {
  try {
    const deck = await Deck.findByPk(req.params.deckId, {
      include: [{ model: Card }]
    });
    res.json(deck);
  } catch (err) {
    next(err);
  }
});

router.put("/:deckId", async (req, res, next) => {
  try {
    const { deckId } = req.params;
    const deckToUpdate = await Deck.findByPk(deckId);
    const { name, description } = req.body;
    const updatedData = { name, description };
    deckToUpdate.update(updatedData);
    res.status(200).json(deckToUpdate);
  } catch (err) {
    next(err);
  }
});

router.delete("/:deckId", async (req, res, next) => {
  try {
    const { deckId } = req.params;
    await Deck.destroy({
      where: { id: deckId }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
