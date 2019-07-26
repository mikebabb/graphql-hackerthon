"use strict";
const faker = require("faker");
const random = require("lodash.random");
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "sprints",
      [
        {
          title: "ILMP Sprint 39 - Wallace",
          teamId: 1,
          startedAt: faker.date.recent(10),
          endedAt: faker.date.recent(-10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ILMP Sprint 39 - Gromit",
          teamId: 2,
          startedAt: faker.date.recent(10),
          endedAt: faker.date.recent(-10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface, Sequelize) => {},
};
