const router = require("express").Router();
const { Deck, Card, Example } = require("../db/models/index");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const exampless = await Example.findAll({
      include: [
        {
          model: Card,
          required: false
        }
      ]
    });
    res.json(exampless);
  } catch (err) {
    next(err);
  }
});

// add an example
router.post("/", async (req, res, next) => {
  try {
    const { audio, japanese, english, tags } = req.body;
    const newExample = await Example.create({
      audio,
      japanese,
      english,
      tags
    });
    res.status(200).json(newExample);
  } catch (err) {
    next(err);
  }
});
