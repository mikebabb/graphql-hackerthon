"use strict";
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    "status",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Status.associate = function(models) {
    Status.belongsTo(models.issue);
  };
  return Status;
};
