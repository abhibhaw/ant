const graphql = require("graphql");

const { GraphQLObjectType } = graphql;

const { regions, region } = require("./geolocation/region");
const { hubs, hub } = require("./geolocation/hub");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    regions: regions,
    region: region,
    hubs: hubs,
    hub: hub,
  },
});

module.exports = RootQuery;
