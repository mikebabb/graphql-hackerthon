"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      getterMethods: {
        fullName() {
          return this.firstName + " " + this.lastName;
        },
      },
      setterMethods: {
        fullName(value) {
          const names = value.split(" ");
          this.setDataValue("firstName", names.slice(0, -1).join(" "));
          this.setDataValue("lastName", names.slice(-1).join(" "));
        },
      },
    }
  );
  User.associate = models => {
    User.hasMany(models.issue, {
      as: "assignedIssues",
      foreignKey: "id",
      sourceKey: "id",
    });
    User.hasMany(models.issue, {
      as: "reportedIssues",
      foreignKey: "id",
      sourceKey: "id",
    });
    User.belongsTo(models.team);
    User.belongsTo(models.userRole, {
      foreignKey: "roleId",
      as: "role",
      allowNull: true,
    });
  };

  User.findAll().then(users => users);

  User.findByPk().then(user => user);

  return User;
};
