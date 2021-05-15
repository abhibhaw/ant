const graphql = require("graphql");
const HubType = require("./hubType");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const Hub = require("../../../models/geolocation/hub");

const RegionType = new GraphQLObjectType({
  name: "Region",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    hubID: { type: GraphQLString },
    hub: {
      type: HubType,
      resolve(parent, args) {
        return Hub.findById(parent.hubID);
      },
    },
  }),
});

module.exports = RegionType;
