"use strict";
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "users",
      times(10, () => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        roleId: random(1, 4),
        teamId: random(1, 2),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    ),
  down: (queryInterface, Sequelize) => {},
};
