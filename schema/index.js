import { GraphQLSchema, GraphQLObjectType } from "graphql";
import AccountQuery from "./queries/account.query.js";
import AccountMutations from "./mutations/account.mutation.js";

const Schema = new GraphQLSchema({
  types: null,
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...AccountQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: {
      ...AccountMutations,
    },
  }),
});

export default Schema;
