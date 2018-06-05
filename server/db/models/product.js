const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  ratings: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
})

module.exports = Product
