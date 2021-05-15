const graphql = require("graphql");

const { GraphQLObjectType } = graphql;

const { regions, region } = require("./geolocation/region");
const { hubs, hub } = require("./geolocation/hub");
const { locations, location } = require("./geolocation/location");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    locations: locations,
    location: location,
    regions: regions,
    region: region,
    hubs: hubs,
    hub: hub,
  },
});

module.exports = RootQuery;
