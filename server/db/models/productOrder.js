const Sequelize = require('sequelize')
const db = require('../db')

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

module.exports = ProductOrder
