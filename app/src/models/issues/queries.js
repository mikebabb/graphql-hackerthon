import gql from "graphql-tag";

export const GET_ISSUES = gql`
  query getIssues {
    issues {
      id
      title
      description
    }
  }
`;

export const GET_ISSUE = gql`
  query getIssue($id: ID!) {
    issue(id: $id) {
      id
      title
      status {
        title
      }
      reporter {
        fullName
      }
      storyPoints
      description
    }
  }
`;
