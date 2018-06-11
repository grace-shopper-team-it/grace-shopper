const router = require('express').Router();
const { User } = require('../db/models');
const userAdminRouter = require('./users.admin');
const { isAdmin } = require('./auth.middleware');

router.get('/:id', async (req, res, next) => {
  if (req.user && (req.user.isAdmin || +req.user.id === +req.params.id)) {
    const user = await User.findById(req.params.id, {
      attributes: ['id', 'firstName', 'lastName', 'email', 'isAdmin'],
    });
    res.json(user);
  } else {
    res.status(401).send('Unauthorized');
  }
});

router.use(isAdmin, userAdminRouter);

module.exports = router;
