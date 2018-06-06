const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed' )
  },
  guestId: {
    type: Sequelize.INTEGER
  }
})

//will be associated with user (if they are authenticated); if not, will store guestId here
//will be associated with products
//will need to add tables to the join-table for products and orders so we can add the current price and the quantity....I think (note from Emily)
//Also, get ready for merge conflicts!!
//how would I make this either guest session OR user Id?


module.exports = Order
