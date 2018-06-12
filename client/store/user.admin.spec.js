import userReducer from './user.admin';
import { expect } from 'chai';

describe('user reducer', () => {
  let userList;
  before(() => {
    userList = [
      {
        id: 1,
        firstName: 'Pennywise',
        lastName: 'The Clown',
        email: 'pennywise@it.com',
        isAdmin: true,
      },
      {
        id: 2,
        firstName: 'George',
        lastName: 'Clooney',
        email: 'george@clooney.com',
        isAdmin: false,
      },
      {
        id: 3,
        firstName: 'Bill',
        lastName: 'Denbrough',
        email: 'bill@weallfloat.com',
        isAdmin: true,
      },
    ];
  });
  it('propertly deletes a user give an id', () => {
    const reducerValue = userReducer(
      { users: userList },
      { type: 'REMOVE_USER', userId: 2 }
    );
    expect(reducerValue).to.be.an('object');
    expect(reducerValue.users.length).to.equal(2);
    expect(reducerValue.users[1].firstName).to.equal('Bill');
  });
});
