const router = require('express').Router();
const { Order } = require('../db/models');

// this route will be receiving user's order info (address, confirmed email) -cj

// api/orderInfo

router.post('/', async(req, res) => {
  try {
    await Order.create(req.body);
    res.sendStatus(201)
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
