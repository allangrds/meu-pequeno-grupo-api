const mailer = require('../../../')

const sendEmail = (to, locals) => {
  const emailPath = 'users/create-account/email.hbs'
  const emailOptions = {
    to,
    subject: 'Meu Pequeno Grupo - Resete sua senha',
  }
  const formatedLocals = {
    ...locals,
    header: 'Resete sua senha',
    text: 'Olá, tudo bem? Pra resetar sua senha é só clicar no botão abaixo, pra você poder criar uma nova.',
    c2a_button: 'Resetar senha',
  }

  return mailer(emailPath, emailOptions, formatedLocals)
}

module.exports = sendEmail
