const usersRepository = require('../../repositories/users')

const create = (values, transaction) => {
  const payload = usersRepository.create(values, transaction)

  return payload
}

module.exports = create
