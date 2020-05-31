const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersRepository = require('../../repositories/users')
const UnauthorizedError = require('../../../utils/errors/unauthorizedError')
const { secret } = require('../../../environment')

const authenticate = async (req, res) => {
  const { email, password } = req.body

  const user = await usersRepository.findOne({ email })

  if (!user) {
    throw new UnauthorizedError()
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password)

  if (!isPasswordCorrect) {
    throw new UnauthorizedError()
  }

  const token = jwt.sign(
    { id: user.id },
    secret,
    { expiresIn: 3600 }
  )

  return res.status(200).json({ token })
}

module.exports = authenticate
