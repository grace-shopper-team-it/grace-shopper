const userAdminRouter = require('express').Router();
const { User } = require('../db/models');

userAdminRouter.get('/', async (req, res, next) => {
  const allUsers = await User.findAll({
    attributes: ['firstName', 'lastName', 'id', 'email'],
  });
  res.json(allUsers);
});

module.exports = userAdminRouter;
