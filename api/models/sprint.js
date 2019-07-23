"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sprint = sequelize.define(
    "sprint",
    {
      name: DataTypes.STRING,
      teamId: DataTypes.INTEGER,
      startedAt: DataTypes.DATE,
      endedAt: DataTypes.DATE,
    },
    {}
  );
  Sprint.associate = function(models) {
    Sprint.hasMany(models.issue, {
      as: "issues",
    });
    Sprint.belongsTo(models.team);
  };
  return Sprint;
};
