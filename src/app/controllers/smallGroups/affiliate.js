const usersRepository = require('../../repositories/users')

const affiliate = async (req, res) => {
  const {
    id,
  } = req.body
  const userId = req.user.id

  await usersRepository.update(
    {
      small_group_id: id,
    },
    userId
  )

  return res.status(200).json({})
}

module.exports = affiliate
