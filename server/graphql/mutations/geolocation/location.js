const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const { LocationType } = require("../../types/types");
const Location = require("../../../models/geolocation/location");

const addLocation = {
  type: LocationType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    regionID: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    let location = new Location({
      name: args.name,
      regionID: args.regionID,
    });
    return location.save();
  },
};

const deleteLocation = {
  type: LocationType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Location.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addLocation, deleteLocation };
