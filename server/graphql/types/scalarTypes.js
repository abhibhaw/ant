const { GraphQLScalarType } = require("graphql");

const dateValue = (value) => {
  if (value instanceof Date) {
    return +value;
  }
};

const itemValue = (value) => {
  return value;
};

const ItemType = new GraphQLScalarType({
  name: "Item",
  serialize: itemValue,
  parseValue: itemValue,
});

const DateType = new GraphQLScalarType({
  name: "Date",
  serialize: dateValue,
  parseValue: dateValue,
  parseLiteral(ast) {
    return dateValue(ast.value);
  },
});

module.exports = { DateType, ItemType };
