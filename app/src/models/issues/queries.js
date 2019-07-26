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
