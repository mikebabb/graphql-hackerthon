"use strict";
const faker = require("faker");
const random = require("lodash.random");
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "sprints",
      times(4, () => ({
        name: faker.lorem.words(3),
        teamId: random(1, 3),
        startedAt: faker.date.recent(10),
        endedAt: faker.date.recent(-10),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    ),
  down: (queryInterface, Sequelize) => {},
};
