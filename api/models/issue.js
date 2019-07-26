"use strict";
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define(
    "issue",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.TEXT,
      statusId: DataTypes.INTEGER,
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
      foreignKey: "parentId",
      sourceKey: "id",
    });
    Issue.belongsTo(models.user, {
      as: "assignee",
      foreignKey: "assigneeId",
      allowNull: true,
    });
    Issue.belongsTo(models.status, {
      as: "status",
      foreignKey: "statusId",
      allowNull: false,
    });
    Issue.belongsTo(models.user, {
      as: "reporter",
      foreignKey: "reporterId",
      allowNull: true,
    });
    Issue.belongsTo(models.sprint, {
      as: "sprint",
      foreignKey: "sprintId",
      allowNull: true,
    });
    Issue.belongsToMany(models.label, {
      as: "labels",
      through: "issueLabels",
      foreignKey: "labelId",
    });
  };

  Issue.findAll().then(issues => issues);

  Issue.findByPk().then(issue => issue);

  return Issue;
};
