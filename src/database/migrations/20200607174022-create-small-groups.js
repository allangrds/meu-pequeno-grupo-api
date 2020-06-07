const getSchema = DataTypes => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  name: {
    allowNull: true,
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
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE,
  },
})

module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.createTable(
      'SmallGroups',
      getSchema(DataTypes)
    )
  ),

  down: queryInterface => (
    queryInterface.dropTable('SmallGroups')
  ),
}
