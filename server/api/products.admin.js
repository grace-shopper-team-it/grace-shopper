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

// add an existing category to a specified product
productAdminRouter.post(
  '/:productId/new/categories/:categoryId/',
  async (req, res, next) => {
    const [category, product] = await Promise.all([
      Category.findById(req.params.categoryId),
      Product.findById(req.params.productId),
    ]);
    const currentCategories = await product.getCategories();
    await product.setCategories([...currentCategories, category]);
    const productWithDetail = await Product.findById(product.id, {
      include: [Category],
    });
    res.status(201).send(productWithDetail);
  }
);

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
