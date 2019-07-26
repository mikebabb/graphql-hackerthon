import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import withLayout from "components/withLayout";
import { PageHeader, List, ListItem, Spinner } from "../../mate";

import { GET_ISSUES } from "../../models/issues/queries";

const IssueList = () => {
  const { data, loading, error } = useQuery(GET_ISSUES);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <React.Fragment>
      <PageHeader>Issues</PageHeader>
      <List>
        {data.issues.map(issue => (
          <ListItem key={issue.id}>
            <Link to={`/issues/${issue.id}`}>{issue.title}</Link>
            <p>{issue.description}</p>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default withLayout(IssueList);
