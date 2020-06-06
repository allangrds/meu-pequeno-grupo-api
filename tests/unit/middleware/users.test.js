const { expect } = require('chai')

const validateData = require('../../../src/middlewares/validator/validateData')
const { create: createSchema } = require('../../../src/middlewares/validator/schemas/users')

describe('Middlewares', () => {
  describe('Validator', () => {
    describe('Users', () => {
      describe('With wrong request values', () => {
        describe('name', () => {
          it('should show "required" message', () => {
            const result = validateData(createSchema, { body: {} })

            const expectedResult = {
              field: 'name',
              type: 'any.required',
              message: '"body.name" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(createSchema, {
              body: {
                name: 1,
              },
            })

            const expectedResult = {
              field: 'name',
              type: 'string.base',
              message: '"body.name" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(createSchema, {
              body: {
                name: 'a',
              },
            })

            const expectedResult = {
              field: 'name',
              type: 'string.min',
              message: '"body.name" length must be at least 2 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(createSchema, {
              body: {
                name: String('a').repeat(51),
              },
            })

            const expectedResult = {
              field: 'name',
              type: 'string.max',
              message: '"body.name" length must be less than or equal to 50 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
        })
        describe('email', () => {
          it('should show "required" message', () => {
            const result = validateData(createSchema, { body: {} })

            const expectedResult = {
              field: 'email',
              type: 'any.required',
              message: '"body.email" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(createSchema, {
              body: {
                email: 1,
              },
            })

            const expectedResult = {
              field: 'email',
              type: 'string.base',
              message: '"body.email" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(createSchema, {
              body: {
                email: String('a').repeat(51),
              },
            })

            const expectedResult = {
              field: 'email',
              type: 'string.max',
              message: '"body.email" length must be less than or equal to 50 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "email" message', () => {
            const result = validateData(createSchema, {
              body: {
                email: 'e',
              },
            })

            const expectedResult = {
              field: 'email',
              type: 'string.email',
              message: '"body.email" must be a valid email',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
        })
        describe('password', () => {
          it('should show "required" message', () => {
            const result = validateData(createSchema, { body: {} })

            const expectedResult = {
              field: 'password',
              type: 'any.required',
              message: '"body.password" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(createSchema, {
              body: {
                password: 1,
              },
            })

            const expectedResult = {
              field: 'password',
              type: 'string.base',
              message: '"body.password" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(createSchema, {
              body: {
                password: '12345',
              },
            })

            const expectedResult = {
              field: 'password',
              type: 'string.min',
              message: '"body.password" length must be at least 6 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(createSchema, {
              body: {
                password: String('a').repeat(101),
              },
            })

            const expectedResult = {
              field: 'password',
              type: 'string.max',
              message: '"body.password" length must be less than or equal to 100 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
        })
        describe('gender', () => {
          it('should show "required" message', () => {
            const result = validateData(createSchema, { body: {} })

            const expectedResult = {
              field: 'gender',
              type: 'any.required',
              message: '"body.gender" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(createSchema, {
              body: {
                gender: 1,
              },
            })

            const expectedResult = {
              field: 'gender',
              type: 'string.base',
              message: '"body.gender" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "valid" message', () => {
            const result = validateData(createSchema, {
              body: {
                gender: 'le',
              },
            })

            const expectedResult = {
              field: 'gender',
              type: 'any.only',
              message: '"body.gender" must be one of [male, female]',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
        })
      })
      describe('With correct request values', () => {
        it('should not show any message', () => {
          const result = validateData(createSchema, {
            body: {
              name: 'joao',
              email: 'email@email.com',
              password: '1234567',
              gender: 'male',
            },
          })

          expect(result).to.equal(null)
        })
      })
    })
  })
})
