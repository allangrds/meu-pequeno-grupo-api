const emailResetPasswordRepository = require('../../repositories/email-reset-password')
const mailerService = require('../mailer/pages/auth/reset-password')
const { url } = require('../../../environment')

const sendEmail = async ({ id, email, name }, transaction) => {
  const savedEmailResetPassword = await emailResetPasswordRepository.findOne({
    user_id: id,
  })

  let payload

  if (!savedEmailResetPassword || !savedEmailResetPassword.user_id) {
    payload = await emailResetPasswordRepository.create(
      { user_id: id },
      transaction
    )
  } else {
    payload = await emailResetPasswordRepository.update(
      savedEmailResetPassword,
      transaction
    )
  }

  await mailerService(email, {
    name,
    c2a_link: `${url}users/email-confirmation/${payload.token}`,
  })
}

module.exports = sendEmail
