'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        category_id: 1,
        name: 'Dutch Milk',
        unit_price: 4.5
      },
      {
        category_id: 2,
        name: 'Kolen',
        unit_price: 1.0
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
