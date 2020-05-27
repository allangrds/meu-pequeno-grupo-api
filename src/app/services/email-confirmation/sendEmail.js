const emailConfirmationRepostory = require('../../repositories/email-confirmation')
const mailerService = require('../mailer/pages/users/create-account')
const { url } = require('../../../environment')

const sendEmail = async ({ id, email, name }, transaction) => {
  const savedEmailConfirmation = await emailConfirmationRepostory.findOne({
    user_id: id,
  })

  let payload

  if (!savedEmailConfirmation || !savedEmailConfirmation.user_id) {
    payload = await emailConfirmationRepostory.create(
      { user_id: id },
      transaction
    )
  } else {
    payload = await emailConfirmationRepostory.update(
      savedEmailConfirmation,
      transaction
    )
  }

  await mailerService(email, {
    name,
    c2a_link: `${url}users/email-confirmation/${payload.token}`,
  })
}

module.exports = sendEmail
