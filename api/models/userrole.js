"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    "userRole",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  UserRole.associate = function(models) {
    // UserRole.belongsTo(models.user);
  };
  return UserRole;
};
