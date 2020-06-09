const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "histories",
      Array.from({ length: 4 }, () => {
        return {
          title: faker.lorem.words(2),
          description: faker.lorem.sentences(5),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("histories", null, {});
  },
};
