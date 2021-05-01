const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addRegion } = require("./geolocation/region");
const { addHub, deleteHub } = require("./geolocation/hub");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRegion,
    addHub,
    deleteHub,
  },
});

module.exports = Mutation;
