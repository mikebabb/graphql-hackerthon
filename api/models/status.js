"use strict";
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    "status",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  Status.associate = function(models) {
    Status.hasMany(models.issue);
  };

  Status.findAll().then(statuses => statuses);

  Status.findByPk().then(status => status);

  return Status;
};
