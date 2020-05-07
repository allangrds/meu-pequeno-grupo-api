const usersRepository = require('../../repositories/users')

const create = (values) => {
  const payload = usersRepository.create(values)

  return payload
}

module.exports = create
