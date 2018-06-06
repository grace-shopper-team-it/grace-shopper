const Sequelize = require('sequelize')
const db = require('../db')

const ProductOrder = db.define('productOrder', {
  // REVIEW: why is this decimal?
  // why is there a price on ProductOrder ? and on Product?
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = ProductOrder
