"use strict";
const times = require("lodash.times");
const random = require("lodash.random");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "issueLabels",
      times(20, () => ({
        issueId: random(1, 15),
        labelId: random(1, 20),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
