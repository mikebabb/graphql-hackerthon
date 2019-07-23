import gql from "graphql-tag";

export const ISSUE_PARTS_FRAGMENT = gql`
  fragment IssueParts on Issue {
    title
    description
    status
    storyPoints
    sprint {
      id
    }
    assignee {
      id
    }
    reporter {
      id
    }
    labels {
      id
    }
  }
`;

export const GET_ISSUE = gql`
  query getIssue($id: ID!) {
    issue(id: $id) {
      ...IssueParts
    }
  }
  ${ISSUE_PARTS_FRAGMENT}
`;

export const GET_ISSUE_FORM_META = gql`
  query getIssueFormMeta {
    issues {
      value: id
      label: title
    }
    users {
      value: id
      label: fullName
    }
    labels {
      value: id
      label: title
    }
  }
`;

export const SAVE_ISSUE = gql`
  mutation UpdateIssue(
    $id: ID!
    $title: String!
    $description: String
    $status: Int
    $storyPoints: Int
    $reporterId: Int
    $assigneeId: Int
  ) {
    updateIssue(
      id: $id
      title: $title
      description: $description
      status: $status
      storyPoints: $storyPoints
      assigneeId: $assigneeId
      reporterId: $reporterId
    ) {
      ...IssueParts
    }
  }
  ${ISSUE_PARTS_FRAGMENT}
`;
