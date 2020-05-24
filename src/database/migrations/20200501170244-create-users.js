const getSchema = DataTypes => ({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(50),
    unique: true,
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
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
      'Users',
      getSchema(DataTypes)
    )
  ),

  down: queryInterface => (
    queryInterface.dropTable('Users')
  ),
}
