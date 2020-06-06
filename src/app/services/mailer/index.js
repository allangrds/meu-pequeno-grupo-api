const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')

const mailer = require('../../../config/mailer')

const sendEmail = (emailPath, emailOptions, locals) => {
  const source = fs.readFileSync(
    path.join(
      `${__dirname}/pages/`,
      emailPath
    ),
    'utf8'
  )

  const headerPartil = fs.readFileSync(
    path.join(
      __dirname,
      'partials/includes/header.hbs'
    ),
    'utf-8'
  )
  const footerPartil = fs.readFileSync(
    path.join(
      __dirname,
      'partials/includes/footer.hbs'
    ),
    'utf-8'
  )
  handlebars.registerPartial('header', headerPartil)
  handlebars.registerPartial('footer', footerPartil)

  const template = handlebars.compile(source)

  const options = {
    to: emailOptions.to,
    subject: emailOptions.subject,
    html: template(locals),
  }

  return mailer(options)
}

module.exports = sendEmail
