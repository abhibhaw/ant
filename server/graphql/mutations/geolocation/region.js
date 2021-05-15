const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const RegionType = require("../../types/geolocationType/regionType");
const Region = require("../../../models/geolocation/region");

const addRegion = {
  type: RegionType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    hubID: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    let region = new Region({
      name: args.name,
      hubID: args.hubID,
    });
    return region.save();
  },
};

const deleteRegion = {
  type: RegionType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Region.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addRegion, deleteRegion };
