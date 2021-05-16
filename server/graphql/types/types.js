const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;
const Hub = require("../../models/geolocation/hub");
const Region = require("../../models/geolocation/region");
const Location = require("../../models/geolocation/location");

// -----------------------------------------------Geolocation Types Starts----------------------------------------------
const HubType = new GraphQLObjectType({
  name: "Hub",
  fields: () => ({
    id: { type: GraphQLID },
    hubName: { type: GraphQLString },
    address: { type: GraphQLString },
    mobileNo: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

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
    locations: {
      type: new GraphQLList(LocationType),
      resolve(parent, args) {
        return Location.find({ regionID: parent.id });
      },
    },
  }),
});

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

// -----------------------------------------------Executives Types Start----------------------------------------------------

const RouteType = new GraphQLObjectType({
  name: "Route",
  fields: () => ({
    id: { type: GraphQLID },
    routeName: { type: GraphQLString },
    locations: {
      type: GraphQLList(LocationType),
      resolve(parent, args) {
        return Location.find({ routeID: parent.id });
      },
    },
  }),
});

// -----------------------------------------------Executives Types Ends----------------------------------------------------

module.exports = { HubType, RegionType, LocationType, RouteType };
