const router = require('express').Router();
const { Product } = require('../db/models');
const { Review } = require('../db/models');

module.exports = router;

// Get all the products
router.get('/', (req, res, next) => {
  Product.findAll({})
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

// get specific product
router.get('/products/:id', (req, res, next) => {
  return Product.findOne({
    where: {
      productId: req.params.id,
    },
  })
    .then(product => {
      res.json(product);
    })
    .catch(next);
});

// get review of a product
router.get('/products/:id/reviews', (req, res, next) => {
  return Review.findAll({
    where: {
      productId: req.params.productId,
    },
  })
    .then(reviews => res.json(reviews))
    .catch(next);
});
