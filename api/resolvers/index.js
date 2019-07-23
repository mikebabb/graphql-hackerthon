export default {
  User: {
    issues: (parent, args, context, info) => parent.getIssues(),
    team: (parent, args, context, info) => parent.getTeam(),
    role: (parent, args, context, info) => parent.getRole(),
  },
  UserRole: {
    users: (parent, args, context, info) => parent.getUsers(),
  },
  Sprint: {
    issues: (parent, args, context, info) => parent.getIssues(),
    team: (parent, args, context, info) => parent.getTeam(),
  },
  Issue: {
    assignee: (parent, args, context, info) => parent.getAssignee(),
    reporter: (parent, args, context, info) => parent.getReporter(),
    sprint: (parent, args, context, info) => parent.getSprint(),
    labels: (parent, args, context, info) => parent.getLabels(),
    children: (parent, args, context, info) => parent.getChildren(),
  },
  Query: {
    sprints: (parent, args, { db }, info) => db.sprint.findAll(),
    sprint: (parent, { id }, { db }, info) => db.sprint.findByPk(id),
    issues: (parent, args, { db }, info) =>
      db.issue.findAll({
        where: {
          sprintId: args.sprintId,
        },
      }),
    issue: (parent, { id }, { db }, info) => db.issue.findByPk(id),
    users: (parent, args, { db }, info) => db.user.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
    labels: (parent, args, { db }, info) => db.label.findAll(),
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
