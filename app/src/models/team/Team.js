import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Layout from "layouts/Default";
import { GET_TEAM } from "./queries";

const TeamList = ({ match }) => {
  const { params } = match;
  const { data, loading, error } = useQuery(GET_TEAM, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <Layout>
      <ul>
        {data.team.users.map(user => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default TeamList;
