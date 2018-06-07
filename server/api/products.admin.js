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
    const categories = await Product.createCategories(
      formData.categories,
      Category
    );
    product.setCategories(categories);
    res.status(201).json(product);
  } catch (err) {
    console.error('COMING FROM POST ROUTE:', err.message);
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

productAdminRouter.delete('/:id', async (req, res, next) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

function isAdmin(req, res, next) {
  next();
}

module.exports = { productAdminRouter, isAdmin };
