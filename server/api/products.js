const router = require('express').Router();
const { Products } = require('../db/models');
const { Reviews } = require('../db/models');

module.exports = router;

// Get all the products
router.get('/', (req, res, next) => {
  Products.findAll({})
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

// get review of a product
router.get('/products/:id/reviews', (req, res, next) => {
  return Reviews.findAll({
    where: {
      productId: req.params.productId,
    },
  })
    .then(reviews => res.json(reviews))
    .catch(next);
});
