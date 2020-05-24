const emailConfirmationRepostory = require('../../repositories/email-confirmation')
const mailerService = require('../mailer/pages/users/create-account')
const { url } = require('../../../environment')

const sendEmail = async ({ id, email, name }, transaction) => {
  const payload = await emailConfirmationRepostory.create(
    { user_id: id },
    transaction
  )

  await mailerService(email, {
    name,
    c2a_link: `${url}users/email_confirmation/${payload.token}`,
  })
}

module.exports = sendEmail
