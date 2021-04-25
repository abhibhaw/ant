const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const RegionType = new GraphQLObjectType({
  name: "Region",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    hubID: { type: GraphQLString },
  }),
});

module.exports = RegionType;
