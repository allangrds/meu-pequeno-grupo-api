const mailer = require('../../../')

const sendEmail = (to, locals) => {
  const emailPath = 'users/create-account/email.hbs'
  const emailOptions = {
    to,
    subject: 'Meu Pequeno Grupo - Confirme sua conta',
  }
  const formatedLocals = {
    ...locals,
    header: 'Confirme sua conta',
    text: 'Olá, tudo bem? Você está quase conseguindo acessar sua conta. Basta clicar no botão e ativar sua conta.',
    c2a_button: 'Confirmar conta',
  }

  return mailer(emailPath, emailOptions, formatedLocals)
}

module.exports = sendEmail
