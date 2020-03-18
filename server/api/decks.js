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

router.put("/:userId", (req, res, next) => {
  res.send("Hello put");
});

router.delete("/:userId", (req, res, next) => {
  res.send("Goodbye world");
});
