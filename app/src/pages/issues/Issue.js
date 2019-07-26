import React from "react";
import { useQuery } from "@apollo/react-hooks";

import withLayout from "components/withLayout";

import { PageHeader, Spinner } from "../../mate";
import { GET_ISSUE } from "../../models/issues/queries";

const Issue = ({ match }) => {
  const { params } = match;
  const { data, loading, error } = useQuery(GET_ISSUE, {
    variables: {
      id: params.id,
    },
  });
  const { issue } = data;

  if (loading) return <Spinner />;
  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <React.Fragment>
      <PageHeader>Issue {issue.id}</PageHeader>
      <h2 style={{ marginBottom: "1rem" }}>{issue.title}</h2>
      <div>
        Reported by
        <span style={{ fontWeight: "bold" }}> {issue.reporter.fullName}</span>
      </div>
      <div>
        {issue.storyPoints ? (
          <span>{issue.storyPoints} story points</span>
        ) : (
          "Not story-pointed"
        )}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        Status: <span style={{ fontWeight: "bold" }}>{issue.status.title}</span>
      </div>
      <h4 style={{ marginBottom: "0.5rem" }}>Description</h4>
      <p>{issue.description}</p>
    </React.Fragment>
  );
};

export default withLayout(Issue);
