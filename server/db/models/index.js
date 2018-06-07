const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const Category = require('./category');
const ProductOrder = require('./productOrder');

Product.belongsToMany(Category, { through: 'productCategories' });
Category.belongsToMany(Product, { through: 'productCategories' });

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: 'productOrder' });
Product.belongsToMany(Order, { through: 'productOrder' });

module.exports = {
  User,
  Order,
  Product,
  Review,
  Category,
};
