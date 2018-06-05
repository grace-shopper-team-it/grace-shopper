const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Order = require('./order')
const Category = require('./category')



module.exports = {
  User, Order, Product, Review, Category
}


//Product.belongsToMany(Order)
//Order.hasMany(Product)

//Product.hasMany(Review)
//Review.belongsTo(Product)

//User.hasMany(Review)
//User.hasMany(Order)

//Order.belongsTo(User)
//Category.belongsTo(Product)

//also need methods that decrement the products when they are ordered....
//also need a method that will push the review on the the reviews array in the products for user after someone creates it
