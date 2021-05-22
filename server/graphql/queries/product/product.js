const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { ProductType } = require("../../types/types");
const Product = require("../../../models/product/product");

const products = {
  type: new GraphQLList(ProductType),
  resolve(parent, args) {
    return Product.find({});
  },
};

const product = {
  type: ProductType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Product.findById(args.id);
  },
};

module.exports = { products, product };
