import { gql } from "apollo-server-express";

export default gql(`
  type Sprint {
    id: ID!
    title: String!
    team: Team
    startedAt: String
    endedAt: String
    issues: [Issue!]
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    image: String
    email: String!
    issues: [Issue!]
    teamId: ID
    team: Team
  }
  type Team {
    id: ID!
    name: String!
    users: [User!]
  }
  type Issue {
    id: ID!
    title: String!
    description: String
    status: Status
    storyPoints: Int
    assigneeId: ID
    assignee: User
    reporterId: ID
    reporter: User
    type: String
    labels: [Label!]!
    sprint: Sprint
    children: [Issue!]!
  }
  type Label {
    id: ID!
    title: String!
    slug: String!
  }
  type Status {
    id: ID!
    title: String!
    issues: [Issue!]
  }
  type Query {
    sprints(teamId: ID): [Sprint!]!
    sprint(id: ID!): Sprint
    issues(
      sprintId: ID,
      statusId: ID,
      type: String,
      parentId: ID,
      assigneeId: ID,
      reporterId: ID
    ): [Issue!]!
    issue(id: ID!): Issue
    status(id: ID!): Status
    statuses: [Status!]
    user(id: ID): User
    users(teamId: ID): [User!]!
    team(id: ID!): Team
    teams: [Team!]!
    label(id: ID!): Label
    labels: [Label!]!
  }

  type Mutation {
    createIssue(title: String, description: String): Issue!
    updateIssue(
      id: ID!
      title: String
      description: String
      statusId: ID
      storyPoints: Int
      reporterId: Int
      assigneeId: Int
    ): Issue!
    deleteIssue(id: ID!): Int!
  }
`);
