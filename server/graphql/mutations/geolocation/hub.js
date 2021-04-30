const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLInt } = graphql;

const HubType = require("../../types/geolocationType/hubType");
const Hub = require("../../../models/geolocation/hub");

const addHub = {
  type: HubType,
  args: {
    hubName: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    mobileNo: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    let hub = new Hub({
      hubName: args.hubName,
      address: args.address,
      mobileNo: args.mobileNo,
      email: args.email,
    });
    return hub.save();
  },
};

module.exports = { addHub };
