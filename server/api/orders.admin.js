const orderAdminRouter = require('express').Router
const { Product, productOrder, Order} = require('../db/models')

const isAdmin = (user) => {
  return user.isAdmin;
}

orderAdminRouter.use('/', async (req, res, next) => {
  if (!isAdmin(req.user)) {
    res.status(400).send('Unauthorized user')
    next()
  }
})

//retrieve all the orders in the database, including the products associated with them
orderAdminRouter.get('/', async (req, res, next) => {
  const orders = await Order.findAll({include: {model: productOrder}})
  res.json(orders)
  next()
});

//retrieve one order from the db, including its associated products
orderAdminRouter.get('/:id', async (req, res, next) => {
  const order = await Order.findOne({where: {id: req.params.id}})
  res.json(order)
  next()
});

//update one order in the database
orderAdminRouter.put('/:id', async (req, res, next) => {
  const status = {
    status: req.body.status
  };
  const updatedOrder = await Order.update(status, {where: {id: req.params.id}});
  res.json(updatedOrder)
  next()
});

module.exports = (orderAdminRouter)
