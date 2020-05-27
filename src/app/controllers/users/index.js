const create = require('./create')
const sendConfirmationEmail = require('./sendConfirmationEmail')
const activateAccount = require('./activateAccount')

module.exports = {
  create,
  activateAccount,
  sendConfirmationEmail,
}
