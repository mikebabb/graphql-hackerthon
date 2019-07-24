import { gql } from "apollo-server-express";

export default gql(`
  type Sprint {
    id: ID!
    title: String!
    team: Team!
    startedAt: String!
    endedAt: String!
    issues: [Issue!]!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    image: String!
    email: String!
    issues: [Issue!]!
    team: Team!
  }
  type Team {
    id: ID!
    name: String!
    users: [User!]!
  }
  type Issue {
    id: ID!
    title: String!
    description: String
    status: Int!
    storyPoints: Int
    assigneeId: ID
    assignee: User
    reporterId: ID
    reporter: User
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
    issues: [Issue!]!
  }
  type Query {
    sprints: [Sprint!]!
    sprint(id: ID!): Sprint
    issues(sprintId: ID): [Issue!]!
    issue(id: ID!): Issue
    user(id: ID!): User
    users: [User!]!
    team(id: ID!): Team
    teams: [Team!]!
    label(id: ID!): Label
    labels: [Label!]!
  }

  type Mutation {
    createIssue(title: String, description: String): Issue!
    updateIssue(
      id: ID!
      title: String!
      description: String
      status: Int
      storyPoints: Int
      reporterId: Int
      assigneeId: Int
    ): Issue!
    deleteIssue(id: ID!): Int!
  }
`);
