const router = require('express').Router();
const { ProductOrder } = require('../db/models');

// this route will be receiving products when they're ordered -cj

// api/orderItems

router.post('/', async (req, res) => {
  const productsArr = req.body.map(product => {
    product.price = Number(product.price)
    console.log('individual product', product)
    product.cartQuantity = Number(product.cartQuantity)
    return product
  })
  console.log('producsArr', productsArr)
    try {
      await ProductOrder.bulkCreate(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
    }
  });



module.exports = router;
