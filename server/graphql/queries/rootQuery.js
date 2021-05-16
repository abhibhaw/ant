const graphql = require("graphql");

const { GraphQLObjectType } = graphql;

const { regions, region } = require("./geolocation/region");
const { hubs, hub } = require("./geolocation/hub");
const { locations, location } = require("./geolocation/location");
const { routes, route } = require("./executive/route");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Geolocations
    locations: locations,
    location: location,
    regions: regions,
    region: region,
    hubs: hubs,
    hub: hub,
    // Executives
    routes: routes,
    route: route,
  },
});

module.exports = RootQuery;
