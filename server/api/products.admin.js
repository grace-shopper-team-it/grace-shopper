const productAdminRouter = require('express').Router();
const { Product, Category } = require('../db/models');

productAdminRouter.post('/', async (req, res, next) => {
  try {
    const formData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inventory: req.body.inventory,
      imageUrl: req.body.imageUrl,
      categories: req.body.categories.split(' '),
    };
    const product = await Product.create(formData);
    console.log(
      'categories array:',
      Product.handleCategories(formData.categories, Category)
    );
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

productAdminRouter.put('/:id', async (req, res, next) => {
  try {
    const formData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inventory: req.body.inventory,
      imageUrl: req.body.imageUrl,
    };
    await Product.update(formData, { where: { id: req.params.id } });
    const updatedProduct = await Product.findById(req.params.id);
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

function isAdmin(req, res, next) {
  next();
}

module.exports = { productAdminRouter, isAdmin };
