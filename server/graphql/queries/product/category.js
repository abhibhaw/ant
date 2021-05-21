const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { CategoryType } = require("../../types/types");
const Category = require("../../../models/product/category");

const categories = {
  type: new GraphQLList(CategoryType),
  resolve(parent, args) {
    return Category.find({});
  },
};

const category = {
  type: CategoryType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Category.findById(args.id);
  },
};

module.exports = { categories, category };
