"use strict";
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "team",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Team.associate = function(models) {
    Team.hasMany(models.user, {
      as: "users",
    });
    Team.hasMany(models.sprint, {
      as: "sprints",
    });
  };
  return Team;
};
