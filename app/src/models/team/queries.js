import gql from "graphql-tag";

export const TEAM_FRAGMENT = gql`
  fragment TeamParts on Team {
    id
    name
    users {
      fullName
      image
      email
    }
  }
`;

export const GET_TEAMS = gql`
  query getTeams {
    teams {
      ...TeamParts
    }
  }
  ${TEAM_FRAGMENT}
`;

export const GET_TEAM = gql`
  query getTeam($id: ID!) {
    team(id: $id) {
      ...TeamParts
    }
  }
  ${TEAM_FRAGMENT}
`;
