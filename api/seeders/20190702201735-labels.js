"use strict";
const faker = require("faker");
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "labels",
      times(20, () => ({
        title: faker.lorem.word(),
        slug: faker.lorem.slug(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
