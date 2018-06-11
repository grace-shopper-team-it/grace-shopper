const router = require('express').Router();
const { ProductOrder } = require('../db/models');

// this route will be receiving products when they're ordered -cj

// api/orderItems

router.post('/', async (req, res) => {
    try {
      await ProductOrder.bulkCreate(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
    }
  });



module.exports = router;
