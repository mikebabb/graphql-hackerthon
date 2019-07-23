import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_TEAMS } from "./queries";

const TeamList = () => {
  const { data, loading, error } = useQuery(GET_TEAMS);

  if (loading) return <h3>Loading...</h3>;
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

export default TeamList;
