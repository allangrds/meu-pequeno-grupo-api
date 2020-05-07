const { expect } = require('chai')
const faker = require('faker')

const { User } = require('../../../src/app/models')
const baseRepository = require('../../../src/app/repositories/base')

describe('Repositories', () => {
  describe('Base', () => {
    let user
    let userName
    let userEmail

    before(async () => {
      const attributes = ['name']

      userName = faker.name.findName()
      userEmail = faker.internet.email()

      const values = {
        name: userName,
        email: userEmail,
        gender: 'male',
        password: faker.internet.password(),
      }

      user = await baseRepository.create(
        User,
        attributes,
        values
      )
    })

    after(() => {
      User.destroy({
        where: { email: userEmail },
      })
    })

    it('should have one item returned', () => {
      expect(Object.keys(user)).to.have.lengthOf(1)
    })

    it('should have "name" property', () => {
      expect(user.name).to.equal(userName)
    })
  })
})
