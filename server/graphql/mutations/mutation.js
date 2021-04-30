const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addRegion } = require("./geolocation/region");
const { addHub } = require("./geolocation/hub");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRegion,
    addHub,
  },
});

module.exports = Mutation;
