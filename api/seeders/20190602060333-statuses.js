"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "statuses",
      [
        {
          title: "Backlog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "PR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "QA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Releasable",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("statuses", null, {});
  },
};
