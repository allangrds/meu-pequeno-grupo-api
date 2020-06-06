const uuidv4 = require('uuid/v4')

const configuration = {
  tableName: 'EmailResetPassword',
  timestamps: true,
  underscored: true,
}

const hooks = {
  beforeUpdate: (emailResetPassword) => {
    emailResetPassword.token = uuidv4() // eslint-disable-line no-param-reassign
    emailResetPassword.updated_at = new Date() // eslint-disable-line no-param-reassign
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
  const EmailResetPassword = sequelize.define(
    'EmailResetPassword',
    getSchema(DataTypes), {
      hooks,
      ...configuration,
    }
  )

  return EmailResetPassword
}
