"use strict";
const faker = require("faker");
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "userRoles",
      times(4, () => ({
        name: faker.lorem.words(3),
        description: faker.lorem.sentences(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
