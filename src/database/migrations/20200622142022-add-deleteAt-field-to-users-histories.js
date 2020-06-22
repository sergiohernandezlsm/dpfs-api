"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("users", "deletedAt", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn("histories", "deletedAt", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("histories", "deletedAt"),
      queryInterface.removeColumn("users", "deletedAt"),
    ]);
  },
};
