const usersRepository = require('../../repositories/users')

const findOne = () => {
  const payload = usersRepository.findOne()

  return payload
}

module.exports = findOne
