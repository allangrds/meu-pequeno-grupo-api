const uuidv4 = require('uuid/v4')

const configuration = {
  tableName: 'SmallGroups',
  timestamps: true,
  underscored: true,
}

const hooks = {
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
    type: DataTypes.STRING(30),
  },
  recurrent_period: {
    allowNull: false,
    type: DataTypes.ENUM([
      'daily',
      'weekly',
      'monthly',
    ]),
  },
  recurrent_value: {
    allowNull: false,
    type: DataTypes.STRING(2),
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING(255),
  },
  contact_email: {
    allowNull: true,
    type: DataTypes.STRING(45),
  },
  contact_phone: {
    allowNull: true,
    type: DataTypes.STRING(11),
  },
  user_admin_id: {
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
    type: DataTypes.UUID,
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
  const SmallGroup = sequelize.define('SmallGroup', getSchema(DataTypes), {
    hooks,
    ...configuration,
  })

  return SmallGroup
}
