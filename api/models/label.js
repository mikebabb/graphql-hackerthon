"use strict";
module.exports = (sequelize, DataTypes) => {
  const Label = sequelize.define(
    "label",
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {}
  );
  Label.associate = function(models) {
    Label.belongsToMany(models.issue, {
      through: "issueLabels",
      as: "issues",
      foreignKey: "issueId",
    });
  };
  return Label;
};
