import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:5000/graphql",
  resolvers: {
    Query: {
      user: () => ({ __typename: "User", name: "Trainer" }),
    },
  },
});

export default client;
