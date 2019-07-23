export default (sequelize, DataTypes) => {
  const IssueLabels = sequelize.define("issueLabels", {
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "issue",
        key: "id",
      },
    },
    labelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "label",
        key: "id",
      },
    },
  });
  return IssueLabels;
};
