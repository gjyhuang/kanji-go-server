const router = require("express").Router();
const { Deck, Card, Example } = require("../db/models/index");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const examples = await Example.findAll({
      include: [
        {
          model: Card,
          required: false
        }
      ]
    });
    res.json(examples);
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

router.get("/:exampleId", async (req, res, next) => {
  try {
    const example = await Example.findByPk(req.params.exampleId, {
      include: [{ model: Card }]
    });
    res.json(example);
  } catch (err) {
    next(err);
  }
});

router.put("/:exampleId", async (req, res, next) => {
  try {
    const { exampleId } = req.params;
    const exampleToUpdate = await Example.findByPk(exampleId);
    const { audio, japanese, english, tags } = req.body;
    const updatedData = {
      audio,
      japanese,
      english,
      tags
    };
    exampleToUpdate.update(updatedData);
    res.status(200).json(exampleToUpdate);
  } catch (err) {
    next(err);
  }
});

router.delete("/:exampleId", async (req, res, next) => {
  try {
    const { exampleId } = req.params;
    await Example.destroy({
      where: { id: exampleId }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
