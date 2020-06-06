const usersRepository = require('../../repositories/users')

const findOne = (values) => {
  const payload = usersRepository.findOne({ ...values })

  return payload
}

module.exports = findOne
