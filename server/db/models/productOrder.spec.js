const { expect } = require('chai')
const chai = require('chai')
const db = require('../index')
const ProductOrder = db.model('productOrder')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)


describe('productOrder model', () => {
  describe('Product attributes', () => {

    it('has a price, which is the current price of the associated product', async () => {
      try {
        await ProductOrder.create({
          quantity: 3
        })
      } catch (error) {
        expect(error.message).to.include('notNull Violation')
      }
    })

    it('has a quantity', async () => {
      try {
        await ProductOrder.create({
          price: 12.99
        })
      } catch (error) {
        expect(error.message).to.include('notNull Violation')
      }
    })

  })
})