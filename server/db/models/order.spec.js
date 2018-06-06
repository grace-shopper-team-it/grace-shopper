const { expect } = require('chai');
const chai = require('chai')
const db = require('../index');
const User = db.model('user');
const Order = db.model('order')
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('Order model', async () => {
  //create new user
  const cody = await User.create({
    firstName: 'Cody',
    lastName: 'Bone',
    email: 'hello@gmail.com',
    password: '12345',
  });
  //create new order
  const codyOrder = await Order.create({ status: 'Created' });
  //find created user instance
  const foundCody = await User.findOne({
    where: {
      email: 'hello@gmail.com',
    },
  });
  //create products
  const newProduct = await Product.build({
    name: 'shoes',
    description: 'some shoes',
    price: 3.5,
    quantity: 5,
  });
  const newProduct2 = await Product.build({
    name: 'shirt',
    description: 'some shirt',
    price: 1.5,
    quantity: 3,
  });
  //save products
  await db.save();
  describe('Associations', () => {
    it('has a user id', async () => {
      await order.setUser(foundCody);
      expect(order.userId).to.equal(cody.id);
    });
    it('can have many products', async () => {
      await order.setProducts([newProduct, newProduct2]);
      expect(order.getProducts()).to.deep.equal([newProduct, newProduct2]);
    });
  });
  describe('data fields', () => {
    it('must have one of four types of status: Created, Processing, Cancelled, Completed', () => {
      expect(order.create({ status: 'fulfilled' })).to.be.rejected;
      expect(order.create({ status: 'Created' })).to.be.fulfilled;
    });
    it('must belong to either a user or a guest session', async () => {
      const order2 = await Order.build({guestId: null, status: 'Created'});
      db.save()
      expect(order2.userId).to.exist;
      const order3 = await Order.build({guestId: 2, status: 'Processing'});
      expect(order3.userId).to.be.null
    })
  });
});

//note: these are probably not working (note from Emily)
//also, need to find a way to freeze the price of the item at which it was ordered....possibly do this on the join table created by makoing the associations
