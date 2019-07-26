import React from "react";
import { useQuery } from "@apollo/react-hooks";

import withLayout from "components/withLayout";

import { Avatar, PageHeader, List, ListItem, Spinner } from "../../mate";
import { GET_TEAM } from "../../models/team/queries";

const TeamList = ({ match }) => {
  const { params } = match;
  const { data, loading, error } = useQuery(GET_TEAM, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <React.Fragment>
      <PageHeader>Team {data.team.name}</PageHeader>
      <List>
        {data.team.users.map(user => (
          <ListItem key={user.id}>
            <Avatar>
              <img src={user.image} alt={`${user.fullName}'s avatar`} />
            </Avatar>
            {user.fullName}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default withLayout(TeamList);
