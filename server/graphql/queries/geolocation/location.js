const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const LocationType = require("../../types/geolocationType/locationType");
const Location = require("../../../models/geolocation/location");

const locations = {
  type: new GraphQLList(LocationType),
  resolve(parent, args) {
    return Location.find({});
  },
};

const location = {
  type: LocationType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Location.findById(args.id);
  },
};

module.exports = { locations, location };
