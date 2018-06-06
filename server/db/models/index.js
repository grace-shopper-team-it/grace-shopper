const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const Order = require("./order");
const Category = require("./category");
const ProductOrder = require("./productOrder")

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
  Category
};
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//Product.belongsToMany(Order)
//Order.hasMany(Product)

//Product.hasMany(Review)
//Review.belongsTo(Product)

//User.hasMany(Review)
//User.hasMany(Order)

//Order.belongsTo(User)
//Category.belongsTo(Product)

//also need methods that decrement the products when they are ordered....
