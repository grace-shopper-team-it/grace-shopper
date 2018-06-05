const Sequelize = require('sequelize')
const db = require('../db')


const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    validate: {
      length: {
        min: 12
      }
    }
  },
  stars: {
    type: Sequelize.STRING,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Review
