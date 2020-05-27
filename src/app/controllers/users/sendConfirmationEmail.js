const { prop } = require('ramda')

const usersService = require('../../services/users')
const emailConfirmationService = require('../../services/email-confirmation')
const db = require('../../models/index')

function randomNumber (min, max) {
  return Math.random() * (max - min) + min
}

const sendConfirmationEmail = async (req, res) => {
  const { email } = req.body

  const data = await usersService.findOne(email, false)
  const id = prop('id', data)
  const name = prop('name', data)

  if (!id) {
    return setTimeout(() => {
      res.status(200).json({})
    }, randomNumber(1900, 2900))
  }

  let transaction

  try {
    transaction = await db.sequelize.transaction()

    await emailConfirmationService.sendEmail(
      { id, name, email },
      transaction
    )

    await transaction.commit()

    return res.status(200).json({})
  } catch (err) {
    await transaction.rollback()

    throw err
  }
}

module.exports = sendConfirmationEmail
