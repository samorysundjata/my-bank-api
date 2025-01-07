import { GraphQLSchema, GraphQLObjectType } from "graphql";
import AccountQuery from "./queries/account.query.js";

const Schema = new GraphQLSchema({
  types: null,
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      // getAccounts: ///,
      // getAccount: ///,
      // getClients: ///,
    },
  }),
  mutation: null,
});

export default Schema;
