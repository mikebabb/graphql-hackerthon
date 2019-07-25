import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import withLayout from "components/withLayout";
import { PageHeader, List, ListItem, Spinner } from "../../mate";

import { GET_TEAMS } from "../../models/team/queries";

const TeamList = () => {
  const { data, loading, error } = useQuery(GET_TEAMS);

  if (loading) return <Spinner />;
  if (error) return <h2>{error}</h2>;

  return (
    <React.Fragment>
      <PageHeader>Teams</PageHeader>
      <List>
        {data.teams.map(team => (
          <ListItem key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default withLayout(TeamList);
