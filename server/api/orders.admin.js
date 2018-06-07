const orderAdminRouter = require('express').Router();
const { Product, productOrder, Order} = require('../db/models');

//do I need to call next here?? what was it that Collin
//ok so something about this authorization technique does not work...maybe copy what Dustin did?

//if I write a function here, should export it so can re-use

orderAdminRouter.use((req, res, next) => {
  if (!req.user) {
    console.log('no user')
    res.status(403).send('Not Authorized')
    next();
  }
  if (req.user) {
    console.log('user')
    if (!req.user.isAdmin) {
    console.log('but not an admin')
    res.status(403).send('Not Authorized')
    next();
    }
    next();
  }
});

// retrieve all the orders in the database
// do I need to call next here??
orderAdminRouter.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {next(err)}
});

// //retrieve one order from the db, including its associated products // note: eager loading not working here...
orderAdminRouter.get('/:id', async (req, res, next) => {
  const order = await Order.findOne({where: {id: req.params.id}}, {include: {model: productOrder}});
  console.log('order', order)
  res.json(order)
});

// //update one order in the database
orderAdminRouter.put('/:id', async (req, res, next) => {
  console.log('put route here!')
  const status = {
    status: req.body.status
  };
  const [rowUpdated, updatedOrder] = await Order.update(status, {returning: true, where: {id: req.params.id}});
  res.json(updatedOrder)
});

module.exports = orderAdminRouter;
