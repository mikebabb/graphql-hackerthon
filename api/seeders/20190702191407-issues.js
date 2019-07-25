"use strict";
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .bulkInsert(
        "issues",
        times(15, () => ({
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(4),
          statusId: random(1, 6),
          type: faker.random.arrayElement(["bug", "task"]),
          sprintId: random(1, 4),
          storyPoints: faker.random.arrayElement([1, 2, 3, 5, 8, 13, 21]),
          assigneeId: random(1, 10),
          reporterId: random(1, 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        }))
      )
      .then(
        times(10, () =>
          queryInterface.bulkUpdate(
            "issues",
            { parentId: random(1, 15) },
            { id: random(1, 15) }
          )
        )
      ),
  down: (queryInterface, Sequelize) => {},
};
