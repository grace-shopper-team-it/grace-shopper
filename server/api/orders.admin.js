const orderAdminRouter = require('express').Router();
const { Product, ProductOrder, Order, User } = require('../db/models');

//check to see if there is a user; if there is, see if it's authorized; if neither one of those, send status 403; otherwise, go to next;

orderAdminRouter.use((req, res, next) => {
  if (!req.user) {
    res.status(403).send('Not Authorized');
  }
  if (req.user) {
    if (!req.user.isAdmin) {
      res.status(403).send('Not Authorized');
    } else {
      next();
    }
  }
});

// retrieve all the orders in the database
orderAdminRouter.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// //retrieve one order from the db, including its associated products
orderAdminRouter.get('/:id', async (req, res, next) => {
  const order = await Order.findById(req.params.id, {
    include: [Product],
  });
  res.json(order);
});

// //update one order in the database
orderAdminRouter.put('/:id', async (req, res, next) => {
  const status = {
    status: req.body.status,
  };
  const [rowUpdated, updatedOrder] = await Order.update(status, {
    returning: true,
    where: { id: req.params.id }
  });
  const updatedOrderWithProducts = await Order.findById(updatedOrder[0].id, {
    include: [Product],
  })
  res.json(updatedOrderWithProducts);
});

module.exports = orderAdminRouter;
