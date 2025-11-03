module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {})
    */

    // TODO exam: add restaurantId to the seed data with de new foreign key
    await queryInterface.bulkInsert('ProductCategories',
      [
        { name: 'Starters', restaurantId: 1 },
        { name: 'Sides', restaurantId: 1 },
        { name: 'Drinks', restaurantId: 2 },
        { name: 'Main Courses', restaurantId: 2 },
        { name: 'Desserts', restaurantId: 2 },
        { name: 'Sandwiches', restaurantId: 2 }
      ], {})
    // TODO exam: END
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {})
     */
    const { sequelize } = queryInterface
    try {
      await sequelize.transaction(async (transaction) => {
        const options = { transaction }
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options)
        await sequelize.query('TRUNCATE TABLE ProductCategories', options)
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options)
      })
    } catch (error) {
      console.error(error)
    }
  }
}
