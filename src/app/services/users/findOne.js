const usersRepository = require('../../repositories/users')

const findOne = (email, emailConfirmed) => {
  const payload = usersRepository.findOne({
    email,
    email_confirmed: emailConfirmed,
  })

  return payload
}

module.exports = findOne
