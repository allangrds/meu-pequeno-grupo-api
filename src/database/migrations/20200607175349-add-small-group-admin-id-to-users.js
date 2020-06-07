const getColumn = DataTypes => ({
  allowNull: true,
  references: {
    model: 'SmallGroups',
    key: 'id',
  },
  type: DataTypes.UUID,
})

module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.addColumn(
      'Users',
      'small_group_admin_id',
      getColumn(DataTypes)
    )
  ),

  down: queryInterface => (
    queryInterface.removeColumn('Users', 'small_group_admin_id')
  ),
}
