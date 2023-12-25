import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  "https://www.toiletmap.org.uk/api",
);
