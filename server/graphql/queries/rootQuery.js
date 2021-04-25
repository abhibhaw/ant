const graphql = require("graphql");

const { GraphQLObjectType } = graphql;

const { regions, region } = require("./geolocation/region");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    regions: regions,
    region: region,
  },
});

module.exports = RootQuery;
