const productAdminRouter = require('express').Router();
const { Product } = require('../db/models');

productAdminRouter.post('/', async (req, res, next) => {
  try {
    const formData = {
      // NICE!
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


// subtle async difference
endpont = (req, res, next) => {
  try {
    SomeModel.create({})
      .then(() => {})
      .catch(next)
  }
  catch (err) {
    // never reach here
  }
}

endpont = async (req, res, next) => {
  try {
    await SomeModel.create({})
  }
  catch (err) {
    // this actually happens
  }
}

productAdminRouter.put('/:id', async (req, res, next) => {
  try {
    const formData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inventory: req.body.inventory,
      imageUrl: req.body.imageUrl,
    };
    // REVIEW: use returning here?
    await Product.update(formData, { where: { id: req.params.id } });
    const updatedProduct = await Product.findById(req.params.id);
    res.json(updatedProduct);
  } catch (err) {
    // REVIEW: what happens if we don't catch this error?
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
  // REVIEW: ;)
  next();
}

module.exports = { productAdminRouter, isAdmin };
