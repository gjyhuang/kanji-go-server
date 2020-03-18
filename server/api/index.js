const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/entries", require("./entries"));
router.use("/decks", require("./decks"));

router.use((req, res, next) => {
  const err = new Error("Oops! Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
