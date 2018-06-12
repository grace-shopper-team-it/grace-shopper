const router = require('express').Router();
const { Order } = require('../db/models');

// this route will be receiving user's order info (address, confirmed email) -cj

// api/orderInfo

router.post('/', async(req, res) => {
  const order = req.body
  if (!order.userId){
    order.guestId = req.sessionID
    console.log('order', order)
  }
  try {
    const response = await Order.create(order);
    res.status(201)
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
