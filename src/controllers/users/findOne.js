const usersService = require('../../services/users')

const findOne = (req, res) => {
  const payload = usersService.findOne()

  return res.status(200).json(payload)
}

module.exports = findOne
