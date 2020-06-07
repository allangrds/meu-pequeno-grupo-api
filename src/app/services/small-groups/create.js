const smallGroupsRepository = require('../../repositories/small-groups')

const create = (values, transaction) => {
  const payload = smallGroupsRepository.create(values, transaction)

  return payload
}

module.exports = create
