"use strict";
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define(
    "issue",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.INTEGER,
      parentId: DataTypes.INTEGER,
      storyPoints: DataTypes.INTEGER,
      assigneeId: DataTypes.INTEGER,
      reporterId: DataTypes.INTEGER,
    },
    {}
  );
  Issue.associate = models => {
    Issue.belongsTo(models.issue, {
      foreignKey: "parentId",
      as: "parent",
      allowNull: true,
    });
    Issue.hasMany(models.issue, {
      as: "children",
      foreignKey: "id",
      sourceKey: "id",
    });
    Issue.belongsTo(models.user, {
      foreignKey: "assigneeId",
      as: "assignee",
      allowNull: true,
    });
    Issue.belongsTo(models.user, {
      foreignKey: "reporterId",
      as: "reporter",
      allowNull: true,
    });
    Issue.belongsTo(models.sprint, {
      foreignKey: "sprintId",
      as: "sprint",
      allowNull: true,
    });
    Issue.belongsToMany(models.label, {
      through: "issueLabels",
      as: "labels",
      foreignKey: "labelId",
    });
  };

  Issue.findAll().then(issues => issues);

  Issue.findByPk().then(issue => issue);

  return Issue;
};
