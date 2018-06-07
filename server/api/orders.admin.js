const orderAdminRouter = require('express').Router();
const { Product, productOrder, Order} = require('../db/models');

const isAdmin = (user) => {
  return user.isAdmin;
}

//do I need to call next here?? what was it that Collin
//ok so something about this authorization technique does not work...maybe copy what Dustin did?
// orderAdminRouter.use('/', (req, res, next) => {
//   if (!isAdmin(req.user)) {
//     res.status(400).send('Unauthorized user')
//   }
// })

// retrieve all the orders in the database
// do I need to call next here??
orderAdminRouter.get('/', async (req, res, next) => {
  const orders = await Order.findAll()
  res.json(orders)
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
