const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const HubType = require("../../types/geolocationType/hubType");
const Hub = require("../../../models/geolocation/hub");

const hubs = {
  type: new GraphQLList(HubType),
  resolve(parent, args) {
    return Hub.find({});
  },
};

const hub = {
  type: HubType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Hub.findById(args.id);
  },
};

module.exports = { hubs, hub };
