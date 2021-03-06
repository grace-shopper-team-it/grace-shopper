const router = require('express').Router();
const { Product, Review, Category } = require('../db/models');
const productAdminRouter = require('./products.admin');
const { isAdmin } = require('./auth.middleware');

// Get all the products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

// get all categories
router.get('/category', (req, res, next) => {
  return Category.findAll({ include: [Product] })
    .then(categories => res.json(categories))
    .catch(next);
});

// get specific category
router.get('/category/:id', (req, res, next) => {
  return Category.findOne({
    include: [{ model: Product }],
    where: {
      id: req.params.id,
    },
  })
    .then(category => {
      res.json(category);
    })
    .catch(next);
});

// get specific product
router.get('/:id', (req, res, next) => {
  return Product.findOne({
    include: [{ model: Category }],
    where: {
      id: req.params.id,
    },
  })
    .then(product => {
      res.json(product);
    })
    .catch(next);
});

// post review for a product
router.post('/:id/reviews', (req, res, next) => {
  return Review.create(
    { ...req.body, stars: +req.body.stars, productId: req.params.id },
    {
      where: {
        productId: req.params.productId,
      },
    }
  )
    .then(review => res.json(review))
    .catch(next);
});

// get review of a product
router.get('/:id/reviews', (req, res, next) => {
  return Review.findAll({
    where: {
      productId: req.params.id,
    },
  })
    .then(reviews => res.json(reviews))
    .catch(next);
});

// admin routes
router.use(isAdmin, productAdminRouter);

module.exports = router;
