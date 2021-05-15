const graphql = require("graphql");
const RegionType = require("./regionType");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const Region = require("../../../models/geolocation/region");

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    regionID: { type: GraphQLString },
    region: {
      type: RegionType,
      resolve(parent, args) {
        return Region.findById(parent.regionID);
      },
    },
  }),
});

module.exports = LocationType;
