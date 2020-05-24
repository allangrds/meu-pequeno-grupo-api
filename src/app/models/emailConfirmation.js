const uuidv4 = require('uuid/v4')

const configuration = {
  tableName: 'EmailConfirmation',
  timestamps: true,
  underscored: true,
}

const hooks = {
  beforeUpdate: (user) => {
    user.updated_at = new Date() // eslint-disable-line no-param-reassign
  },
}

const getSchema = DataTypes => ({
  token: {
    allowNull: false,
    defaultValue: uuidv4(),
    type: DataTypes.UUID,
    unique: true,
    validate: {
      isUUID: 4,
    },
  },
  user_id: {
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'User',
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
  const EmailConfirmation = sequelize.define(
    'EmailConfirmation',
    getSchema(DataTypes), {
      hooks,
      ...configuration,
    }
  )

  return EmailConfirmation
}
