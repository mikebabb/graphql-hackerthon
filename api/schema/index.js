import { gql } from "apollo-server-express";

export default gql(`
  type Sprint {
    id: ID!
    name: String!
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
    role: UserRole!
  }
  type Team {
    id: ID!,
    name: String!
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
  type UserRole {
    id: ID!
    name: String!
    description: String!
    users: [User!]!
  }
  type Query {
    sprints: [Sprint!]!
    sprint(id: ID!): Sprint
    issues(sprintId: ID): [Issue!]!
    issue(id: ID!): Issue
    user(id: ID!): User
    users: [User!]!
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
