const router = require("express").Router();
const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();

module.exports = router;

router.get("/", (req, res, next) => {
  res.send("Hello world");
});

router.get("/:kanji", async (req, res, next) => {
  const { kanji } = req.params;
  const entry = await jisho.searchForKanji(kanji);
  const scrape = await jisho.scrapeForPhrase(kanji);
  res.send({ ...entry, ...scrape });
});

router.post("/", (req, res, next) => {
  res.send("Hello post");
});

router.put("/:userId", (req, res, next) => {
  res.send("Hello put");
});

router.delete("/:userId", (req, res, next) => {
  res.send("Goodbye world");
});
