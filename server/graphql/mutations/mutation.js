const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addLocation, deleteLocation } = require("./geolocation/location");
const { addRegion, deleteRegion } = require("./geolocation/region");
const { addHub, deleteHub } = require("./geolocation/hub");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addLocation,
    deleteLocation,
    addRegion,
    deleteRegion,
    addHub,
    deleteHub,
  },
});

module.exports = Mutation;
