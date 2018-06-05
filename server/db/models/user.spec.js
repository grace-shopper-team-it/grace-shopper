/* global describe beforeEach it */

const {expect, assert} = require('chai')
const db = require('../index')
const User = db.model('user')
const chaiAsPromised = require('chai-as-promised')
const chai = require('chai')


describe('User model', () => {
  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstName: 'Cody',
          lastName: 'Bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
  describe('name fields', () => {
    let cody

    beforeEach(() => {
      return User.create({
        email: 'cody@puppybook.com',
        password: 'bones',
        firstName: 'Cody',
        lastName: 'Bones'
      })
        .then(user => {
          cody = user
        })
    })
    it('has a first and last name', () => {
      const codyFirst = cody.firstName
      const codyLast = cody.lastName
      expect(codyFirst).to.equal('Cody')
      expect(codyLast).to.equal('Bones')
    })
    it('does not allow empty or null first or last names', async () => {
      
      try {
        const user = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        });
    } catch (error) {
      console.log(error)
      expect(error.message).to.include('notNull Violation: user.firstName cannot be null');
    }

    })
  })
}) // end describe('User model')
