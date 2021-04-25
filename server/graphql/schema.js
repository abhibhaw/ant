const graphql = require("graphql");

const { GraphQLSchema } = graphql;

const RootQuery = require("./queries/rootQuery");
const Mutation = require("./mutations/mutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
