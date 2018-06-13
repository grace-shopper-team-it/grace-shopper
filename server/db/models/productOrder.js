const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')

const ProductOrder = db.define('productOrder', {
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false
  },
  cartQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

//adjusts inventory of Product upon productOrder -cj
ProductOrder.afterBulkCreate((productOrder) => {
  productOrder.map( async (item) => {
  const quant = item.cartQuantity;
  const prodId = item.productId;
  const product = await Product.findById(prodId);
  product.inventory = product.inventory - quant;
  console.log('PRODIUCTET', product);
  product.save();
});

});

module.exports = ProductOrder;
