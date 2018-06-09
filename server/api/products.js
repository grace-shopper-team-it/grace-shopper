const router = require('express').Router();
const { Product, Review, Category } = require('../db/models');
const { isAdmin, productAdminRouter } = require('./products.admin');

// admin routes
router.use(isAdmin, productAdminRouter);

router.get('/test-categories', async (req, res, next) => {
  const categories = await Category.findAll({
    include: [Product],
  });
  res.json(categories);
});

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
  return Category.findAll()
    .then(categories => res.json(categories))
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

// get review of a product
router.get('/:id/reviews', (req, res, next) => {
  return Review.findAll({
    where: {
      productId: req.params.productId,
    },
  })
    .then(reviews => res.json(reviews))
    .catch(next);
});

// post review for a product
router.post('/:id/reviews', (req, res, next) => {
  return Review.create(
    { ...req.body, productId: req.params.id },
    {
      where: {
        productId: req.params.productId,
      },
    }
  )
    .then(review => res.json(review))
    .catch(next);
});

module.exports = router;
