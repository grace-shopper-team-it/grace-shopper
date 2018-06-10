/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const app = require('../index');

const agent = request.agent(app);
describe('Authenticated User routes', () => {
  describe('/api/users/', () => {
    let adminUser;
    let regularUser;
    before(() => {
      adminUser = {
        email: 'bob@bob.com',
        firstName: 'Cody',
        lastName: 'Bones',
        password: 'password',
        isAdmin: true,
      };
      regularUser = {
        email: 'harry@hogwarts.com',
        firstName: 'Harry',
        lastName: 'Potter',
        password: 'password',
      };
    });

    it('GET /api/users for admin', async () => {
      await agent
        .post('/auth/signup')
        .send(adminUser)
        .expect(200)
        .catch(err => console.error(err.message, 'user not created'));

      return agent
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].email).to.be.equal('bob@bob.com');
        });
    });
    it('GET /api/users for regular user', async () => {
      await agent
        .post('/auth/signup')
        .send(regularUser)
        .expect(200)
        .catch(err => console.error(err.message, 'user not created'));
      return agent.get('/api/users').expect(401);
    });
    describe('GET /api/users/:id', () => {
      let regularUserId;
      let adminUserId;
      it('for admin users', async () => {
        await agent
          .post('/auth/signup')
          .send(regularUser)
          .expect(200)
          .then(res => {
            regularUserId = res.body.id;
          });
        await agent
          .post('/auth/signup')
          .send(adminUser)
          .expect(200);
        return agent
          .get(`/api/users/${regularUserId}`)
          .expect(200)
          .then(res => {
            expect(res.body.firstName).to.equal('Harry');
            expect(res.body.lastName).to.equal('Potter');
          });
      });
      it('for regular users', async () => {
        await agent
          .post('/auth/signup')
          .send(adminUser)
          .expect(200)
          .then(res => {
            adminUserId = res.body.id;
          });
        await agent
          .post('/auth/signup')
          .send(regularUser)
          .expect(200)
          .then(res => {
            regularUserId = res.body.id;
          });
        await agent
          .get(`/api/users/${regularUserId}`)
          .expect(200)
          .then(res => expect(res.body.email).to.equal('harry@hogwarts.com'));
        return agent.get(`/api/users/${adminUserId}`).expect(401);
      });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
