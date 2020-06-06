const usersService = require('../../services/users')
const emailResetPasswordService = require('../../services/email-reset-password')
const db = require('../../models/index')

const sendResetPassword = async (req, res) => {
  const { email } = req.body

  const user = await usersService.findOne({ email })

  if (!user) {
    return res.status(200).json({})
  }

  const transaction = await db.sequelize.transaction()

  try {
    await emailResetPasswordService.sendEmail(
      {
        id: user.id,
        email,
        name: user.name,
      },
      transaction
    )

    await transaction.commit()

    return res.status(200).json({})
  } catch (err) {
    await transaction.rollback()

    throw err
  }
}

module.exports = sendResetPassword
