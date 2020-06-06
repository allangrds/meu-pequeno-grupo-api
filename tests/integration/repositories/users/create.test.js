const { expect } = require('chai')
const faker = require('faker')

const { User } = require('../../../../src/app/models')
const usersRepository = require('../../../../src/app/repositories/users')

describe('Repositories', () => {
  describe('Users', () => {
    describe('Create', () => {
      let user
      const payload = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        gender: 'male',
        password: faker.internet.password(),
      }

      before(async () => {
        user = await usersRepository.create(payload)
      })

      after(() => {
        User.destroy({
          where: { email: payload.email },
        })
      })

      it('should have three items returned', () => {
        expect(Object.keys(user)).to.have.lengthOf(3)
      })

      it('should have "name" property', () => {
        expect(user.name).to.equal(payload.name)
      })

      it('should have "email" property', () => {
        expect(user.email).to.equal(payload.email)
      })

      it('should have "created_at" property', () => {
        expect(user.created_at).to.not.equal(undefined)
        expect(user.created_at).to.not.equal(null)
      })
    })
  })
})
