const userAdminRouter = require('express').Router();
const { User, Order, Product } = require('../db/models');

userAdminRouter.get('/', async (req, res, next) => {
  const allUsers = await User.findAll({
    attributes: ['firstName', 'lastName', 'id', 'email'],
  });
  res.json(allUsers);
});

userAdminRouter.put('/:id', async (req, res, next) => {
  const adminStatus = req.body.isAdmin;
  await User.update(
    { isAdmin: adminStatus },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const updatedUser = await User.findById(req.params.id, {
    attributes: ['id', 'firstName', 'lastName', 'email', 'isAdmin'],
    include: [{ model: Order, include: [Product] }],
  });
  res.json(updatedUser);
});

userAdminRouter.delete('/:id', async (req, res, next) => {
  await User.destroy({ where: { id: req.params.id } });
  res.status(204).end();
});

module.exports = userAdminRouter;
