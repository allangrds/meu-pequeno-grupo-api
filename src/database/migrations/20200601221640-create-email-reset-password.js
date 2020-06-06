const getSchema = DataTypes => ({
  token: {
    allowNull: false,
    type: DataTypes.UUID,
    unique: true,
  },
  user_id: {
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'Users',
      key: 'id',
    },
    type: DataTypes.UUID,
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
      'EmailResetPassword',
      getSchema(DataTypes)
    )
  ),

  down: queryInterface => (
    queryInterface.dropTable('EmailResetPassword')
  ),
}
