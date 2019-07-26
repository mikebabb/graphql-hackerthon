"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "teams",
      [
        { name: "Wallace", createdAt: new Date(), updatedAt: new Date() },
        { name: "Gromit", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
