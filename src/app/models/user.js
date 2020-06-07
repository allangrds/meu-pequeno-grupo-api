const bcrypt = require('bcryptjs')
const uuidv4 = require('uuid/v4')

const configuration = {
  tableName: 'Users',
  timestamps: true,
  underscored: true,
}

const hooks = {
  beforeCreate: (user) => {
    user.password = bcrypt.hashSync(user.password, 10) // eslint-disable-line no-param-reassign
  },
  beforeUpdate: (user) => {
    user.updated_at = new Date() // eslint-disable-line no-param-reassign
  },
}

const getSchema = DataTypes => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    validate: {
      isUUID: 4,
    },
    defaultValue: uuidv4(),
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(50),
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM('male', 'female'),
  },
  email_confirmed: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  small_group_id: {
    allowNull: true,
    references: {
      model: 'SmallGroup',
      key: 'id',
    },
    type: DataTypes.UUID,
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
})

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', getSchema(DataTypes), {
    hooks,
    ...configuration,
  })

  return User
}
