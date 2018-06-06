const router = require('express').Router();
const { Product, Review, Category } = require('../db/models');
const { isAdmin, productAdminRouter } = require('./products.admin');

// admin routes
router.use(isAdmin, productAdminRouter);

// Get all the products
router.get('/', (req, res, next) => {
  Product.findAll({})
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

// get specific product
router.get('/:id', (req, res, next) => {
  return Product.findOne({
    include: [Category],
    where: {
      id: req.params.id,
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

module.exports = router;
