const productAdminRouter = require('express').Router();
const { Product } = require('../db/models');

productAdminRouter.post('/', async (req, res, next) => {
  try {
    const formData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inventory: req.body.inventory,
      imageUrl: req.body.imageUrl,
    };
    const product = await Product.create(formData);
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
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

function isAdmin(req, res, next) {
  next();
}

module.exports = { productAdminRouter, isAdmin };
