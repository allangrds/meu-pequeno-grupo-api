const usersRepository = require('../../repositories/users')

const exit = async (req, res) => {
  const userId = req.user.id

  await usersRepository.update(
    {
      small_group_id: null,
    },
    userId
  )

  return res.status(200).json({})
}

module.exports = exit
