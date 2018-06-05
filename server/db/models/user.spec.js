/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

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
      await expect(User.create({email: 'cody@puppybook.com',
      password: 'bones'})).to.be.rejected;
    })
  })
}) // end describe('User model')
