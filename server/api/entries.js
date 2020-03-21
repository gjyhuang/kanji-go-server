const router = require("express").Router();
const axios = require("axios");
const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();
const key = process.env.x_rapidapi_key;

module.exports = router;

router.get("/", (req, res, next) => {
  res.send("Hello world");
});

router.get("/:kanji", async (req, res, next) => {
  try {
    const { kanji } = req.params;
    const encodedKanji = encodeURIComponent(kanji);
    const { data } = await axios({
      url: `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${encodedKanji}`,
      method: "GET",
      headers: { "x-rapidapi-key": key }
    });
    // to find jlpt level
    // const search = await jisho.searchForPhrase(kanji);
    // res.send({ ...data, jlpt: search.data[0].jlpt });
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  res.send("Hello post");
});

router.put("/:kanji", (req, res, next) => {
  res.send("Hello put");
});

router.delete("/:kanji", (req, res, next) => {
  res.send("Goodbye world");
});
