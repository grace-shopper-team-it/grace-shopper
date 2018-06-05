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
