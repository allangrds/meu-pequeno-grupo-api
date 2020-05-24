const { omit } = require('ramda')

const usersService = require('../../services/users')
const emailConfirmationService = require('../../services/email-confirmation')
const usersRepository = require('../../repositories/users')
const db = require('../../models/index')

const makeFakePayload = (name, email) => ({
  name,
  email,
  created_at: new Date(),
})

const create = async (req, res) => {
  const {
    name,
    email,
    password,
    gender,
  } = req.body
  let transaction

  const savedUser = await usersRepository.findOne({ email })
  const userExists = savedUser && savedUser.email

  if (userExists) {
    const fakePayload = makeFakePayload(name, email)

    return res.status(201).json(fakePayload)
  }

  try {
    transaction = await db.sequelize.transaction()

    const payload = await usersService.create(
      {
        name,
        email,
        password,
        gender,
      },
      transaction
    )

    await emailConfirmationService.sendEmail(
      { id: payload.id, email, name },
      transaction
    )

    await transaction.commit()

    return res.status(201).json(omit(['id'], payload))
  } catch (err) {
    await transaction.rollback()

    throw err
  }

}

module.exports = create
