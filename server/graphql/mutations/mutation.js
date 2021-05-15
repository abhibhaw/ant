const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addRegion, deleteRegion } = require("./geolocation/region");
const { addHub, deleteHub } = require("./geolocation/hub");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRegion,
    deleteRegion,
    addHub,
    deleteHub,
  },
});

module.exports = Mutation;
