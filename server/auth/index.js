const router = require('express').Router();
const User = require('../db/models/user');

module.exports = router;

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) res.status(401).send('User not found.');
    else if (!user.hasMatchingPassword(req.body.password))
      res.status(401).send('Incorrect password.');
    else {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    }
  } catch (error) {
    next(error);
  }
});
