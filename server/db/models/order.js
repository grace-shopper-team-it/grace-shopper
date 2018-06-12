const Sequelize = require('sequelize')
const db = require('../db')
const send = require('../../../email');

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed' ),
    defaultValue: 'Created'
  },
  guestId: {
    type: Sequelize.INTEGER
  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  street1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  street2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.DECIMAL(6, 0),
    allowNull: false,
  },
  shippingAddress: {
    type: Sequelize.VIRTUAL,
    get () {
      return this.getDataValue('street1') + ' ' + this.getDataValue('street2') + ' ' + this.getDataValue('city') + ' ' + this.getDataValue('state') + ' ' + this.getDataValue('zipCode')
    }
  }
});

Order.afterBulkUpdate( async (order) => {
  const thisOrder = await Order.findById(order.where.id);
  const email = thisOrder.userEmail;
  const status = thisOrder.status;
  const address = thisOrder.shippingAddress;
  console.log('hello chris, yes the order updated', email, status, address, order);
  // send();
  console.log('THISOPRDER', thisOrder);
})

module.exports = Order;
