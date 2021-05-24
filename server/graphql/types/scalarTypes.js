const { GraphQLScalarType, GraphQLString, GraphQLInt } = require("graphql");

const itemValue = (value) => {
  return value;
};

const ItemType = new GraphQLScalarType({
  name: "Item",
  fields: () => ({
    productID: GraphQLString,
    quantity: GraphQLInt,
  }),
});

module.exports = ItemType;
