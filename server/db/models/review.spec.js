const { expect } = require('chai');
const chai = require('chai')
const db = require('../index');
const User = db.model('user');
const Order = db.model('order')
const Review = db.model('review')
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

xdescribe('Review model', () => {
  describe('Associations', () => {
    //dummy data
    const review = {content: 'hello', stars: 1};

    const user = {firstName: 'Cody', lastName: 'Bones', email: 'codyBones@gmail.com', password: '12345'}

    const product = {name: 'shoes', description: 'a shoes', price: 4, quantity: 1}

    it('has a product and a user', () => {
      Review.create(review).then(review => review.setUser(user)).then(review => review.setProduct(product)).then(review => expect(review).to.be.fullilled)
    })
  });
})

//these tests are not working and I do not know why << note from Emily
