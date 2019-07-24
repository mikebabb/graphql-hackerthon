"use strict";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable("sprints", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
        teamId: {
          type: Sequelize.INTEGER,
          references: {
            model: "teams",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        startedAt: {
          type: Sequelize.DATE,
        },
        endedAt: {
          type: Sequelize.DATE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        queryInterface.addConstraint("issues", ["sprintId"], {
          type: "FOREIGN KEY",
          title: "sprintId",
          references: {
            table: "sprints",
            field: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      }),
  down: (queryInterface, Sequelize) =>
    queryInterface
      .removeConstraint("issues", "sprintId")
      .then(() => queryInterface.dropTable("sprints")),
};
