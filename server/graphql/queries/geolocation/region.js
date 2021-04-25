const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const RegionType = require("../../types/geolocationType/regionType");
const Region = require("../../../models/geolocation/region");

const regions = {
  type: new GraphQLList(RegionType),
  resolve(parent, args) {
    return Region.find({});
  },
};

const region = {
  type: RegionType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Region.findById(args.id);
  },
};

module.exports = { regions, region };
