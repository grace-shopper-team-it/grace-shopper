const Sequelize = require('sequelize')
const db = require('../db')
const { transporter, orderConf, shippingConf, deliveredConf, cancelledConf, orderConfSubj, shippingConfSubj, deliveredConfSubj, cancelledConfSubj } = require('../../../email');


const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed' ),
    defaultValue: 'Created'
  },
  guestId: {
    type: Sequelize.STRING
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

Order.afterCreate((order) => {
  const email = order.userEmail;

  const mailOptions = {
    from: 'funclowntown666@gmail.com',
    to: email,
    subject: orderConfSubj,
    html: orderConf
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
});

Order.afterBulkUpdate( async (order) => {
  const thisOrder = await Order.findById(order.where.id);
  const email = thisOrder.userEmail;
  const status = thisOrder.status;

  const mailOptions = {
   from: 'funclowntown666@gmail.com',
   to: email,
   subject: '',
   html: ''
 };

 switch (status) {
    case 'Processing':
      mailOptions.subject = shippingConfSubj;
      mailOptions.html = shippingConf;
      break;
    case 'Completed':
      mailOptions.subject = deliveredConfSubj;
      mailOptions.html = deliveredConf;
      break;
    case 'Cancelled':
      mailOptions.subject = cancelledConfSubj;
      mailOptions.html = cancelledConf;
    break;
      default:
      return;
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log(info);
        }

    });
  });

module.exports = Order;
