const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

const HubType = new GraphQLObjectType({
  name: "Hub",
  fields: () => ({
    id: { type: GraphQLID },
    hubName: { type: GraphQLString },
    address: { type: GraphQLString },
    mobileNo: { type: GraphQLInt },
  }),
});

module.exports = HubType;
