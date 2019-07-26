import gql from "graphql-tag";

export const UPDATE_STORY_POINTS = gql`
  mutation UpdateStoryPoints($id: ID!) {
    updateIssue(id: $id, storyPoints: $storyPoints) {
      storyPoints
    }
  }
`;
