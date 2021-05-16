const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addLocation, deleteLocation } = require("./geolocation/location");
const { addRegion, deleteRegion } = require("./geolocation/region");
const { addHub, deleteHub } = require("./geolocation/hub");
const { addRoute, deleteRoute } = require("./executive/route");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Geolocation Mutation
    addLocation,
    deleteLocation,
    addRegion,
    deleteRegion,
    addHub,
    deleteHub,
    // Executive Mutation
    addRoute,
    deleteRoute,
  },
});

module.exports = Mutation;
