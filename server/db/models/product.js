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
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9Mk3VEey9qFFa0Oul4kPVnA51QBAHa4whl4NfsOdwerioFYr',
    validate: {
      isUrl: true
    }
  }
})

module.exports = Product
