const smallGroupsRepository = require('../../repositories/small-groups')

const getAll = async (req, res) => {
  const { page } = req.query

  const transactions = await smallGroupsRepository.findAll(page)

  return res.status(200).json(transactions)
}

module.exports = getAll
