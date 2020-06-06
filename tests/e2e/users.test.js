const { expect } = require('chai')
const faker = require('faker')

const request = require('./config/setupServer')
const { User } = require('../../src/app/models')

describe('Users', () => {
  describe('POST /users', () => {
    let response
    const payload = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      gender: 'male',
      password: faker.internet.password(),
    }

    before(async () => {
      response = await request.post('/users').send(payload)
    })

    after(() => {
      User.destroy({
        where: { email: payload.email },
      })
    })

    it('should have statusCode set as "201"', () => {
      expect(response.statusCode).to.equal(201)
    })

    it('should have name property', () => {
      expect(response.body.name).to.equal(payload.name)
    })

    it('should have email propery', () => {
      expect(response.body.email).to.equal(payload.email)
    })

    it('should have created_at property', () => {
      expect(response.body).to.have.property('created_at')
    })
  })
})
