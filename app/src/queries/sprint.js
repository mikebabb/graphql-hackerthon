import gql from "graphql-tag";

export const SPRINT_PARTS_FRAGMENT = gql`
  fragment SprintParts on Sprint {
    name
    issues {
      id
      title
    }
  }
`;

export const GET_SPRINT_FORM_META = gql`
  query getSprintFormMeta {
    sprints {
      value: id
      label: name
    }
  }
`;

export const GET_SPRINT = gql`
  query getSprint($id: ID!) {
    sprint(id: $id) {
      ...SprintParts
    }
  }
  ${SPRINT_PARTS_FRAGMENT}
`;

export const SAVE_SPRINT = gql`
  mutation UpdateSprint($id: ID!, $name: String!) {
    updateSprint(id: $id, name: $name) {
      ...SprintParts
    }
  }
  ${SPRINT_PARTS_FRAGMENT}
`;
