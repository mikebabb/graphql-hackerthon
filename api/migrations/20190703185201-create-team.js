"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("teams", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
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
        queryInterface.addConstraint("users", ["teamId"], {
          type: "FOREIGN KEY",
          name: "teamId",
          references: {
            table: "teams",
            field: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      });
  },
  down: (queryInterface, Sequelize) =>
    queryInterface
      .removeConstraint("users", "teamId")
      .then(() => queryInterface.dropTable("teams")),
};
