const bcrypt = require('bcryptjs')

const usersRepository = require('../../repositories/users')
const emailResetPasswordRepository = require('../../repositories/email-reset-password')

const resetPassword = async (req, res) => {
  const { token } = req.params

  const {
    user_id: userId,
  } = await emailResetPasswordRepository.findOne({ token })

  const password = bcrypt.hashSync(req.body.password, 10)

  await usersRepository.update({
    password,
  }, userId)

  return res.status(200).json({})
}

module.exports = resetPassword
