const router = require('express').Router();
const { Order } = require('../db/models');

// this route will be receiving user's order info (address, confirmed email) -cj

// api/orderInfo

router.post('/', async(req, res) => {
  try {
    const response = await Order.create(req.body);
    res.status(201)
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
