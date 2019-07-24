import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import withLayout from "components/withLayout";
import { Spinner } from "../../mate";

import { GET_TEAMS } from "./queries";

const TeamList = () => {
  const { data, loading, error } = useQuery(GET_TEAMS);

  if (loading) return <Spinner />;
  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <ul>
      {data.teams.map(team => (
        <li key={team.id}>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default withLayout(TeamList);
