const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addRegion } = require("./geolocation/region");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRegion,
  },
});

module.exports = Mutation;
