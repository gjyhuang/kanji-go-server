const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Hello world');
});

router.post('/', (req, res, next) => {
  res.send('Hello post');
});

router.put('/:userId', (req, res, next) => {
  res.send('Hello put');
});

router.delete('/:userId', (req, res, next) => {
  res.send('Goodbye world');
});

module.exports = router;
