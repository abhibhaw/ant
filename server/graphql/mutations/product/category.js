const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const { CategoryType } = require("../../types/types");
const Category = require("../../../models/product/category");

const addCategory = {
  type: CategoryType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    let category = new Category({
      name: args.name,
    });
    return category.save();
  },
};

const deleteCategory = {
  type: CategoryType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Category.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addCategory, deleteCategory };
