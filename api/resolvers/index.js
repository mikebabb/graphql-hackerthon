export default {
  User: {
    issues: (parent, args, context, info) => parent.getIssues(),
    team: (parent, args, context, info) => parent.getTeam(),
  },
  Team: {
    users: (parent, args, context, info) => parent.getUsers(),
  },
  Sprint: {
    issues: (parent, args, context, info) => parent.getIssues(),
    team: (parent, args, context, info) => parent.getTeam(),
  },
  Status: {
    issues: (parent, args, context, info) => parent.getIssues(),
  },
  Issue: {
    assignee: (parent, args, context, info) => parent.getAssignee(),
    reporter: (parent, args, context, info) => parent.getReporter(),
    sprint: (parent, args, context, info) => parent.getSprint(),
    status: (parent, args, context, info) => parent.getStatus(),
    labels: (parent, args, context, info) => parent.getLabels(),
    children: (parent, args, context, info) => parent.getChildren(),
  },
  Query: {
    sprints: (parent, args, { db }, info) =>
      db.sprint.findAll({
        where: {
          ...args,
        },
      }),
    sprint: (parent, { id }, { db }, info) => db.sprint.findByPk(id),
    status: (parent, { id }, { db }, info) => db.status.findByPk(id),
    statuses: (parent, { id }, { db }, info) => db.status.findAll(),
    issues: (parent, args, { db }, info) =>
      db.issue.findAll({
        where: {
          ...args,
        },
      }),
    issue: (parent, { id }, { db }, info) => db.issue.findByPk(id),
    users: (parent, args, { db }, info) =>
      db.user.findAll({
        where: {
          ...args,
        },
      }),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
    team: (parent, { id }, { db }, info) => db.team.findByPk(id),
    teams: (parent, args, { db }, info) =>
      db.team.findAll({
        where: {
          ...args,
        },
      }),
    labels: (parent, args, { db }, info) =>
      db.label.findAll({
        where: {
          ...args,
        },
      }),
    label: (parent, { id }, { db }, info) => db.label.findByPk(id),
  },
  Mutation: {
    createIssue: (parent, { title, description }, { db }, info) =>
      db.issue.create({
        title: title,
        description: description,
      }),
    updateIssue: async (parent, { id, ...rest }, { db }, info) => {
      await db.issue.update(
        { ...rest },
        {
          where: {
            id: id,
          },
        }
      );
      return db.issue.findByPk(id);
    },
    deleteIssue: (parent, { id }, { db }, info) =>
      db.issue.destroy({
        where: {
          id: id,
        },
      }),
  },
};
