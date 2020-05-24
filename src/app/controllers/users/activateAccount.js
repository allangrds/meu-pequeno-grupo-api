const usersRepository = require('../../repositories/users')
const emailConfirmationRepository = require('../../repositories/email-confirmation')

const create = async (req, res) => {
  const { token } = req.params

  const {
    user_id: userId,
  } = await emailConfirmationRepository.findOne({ token })

  await usersRepository.update({ email_confirmed: true }, userId)

  return res.status(200).json({})
}

module.exports = create
