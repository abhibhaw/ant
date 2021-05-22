const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } =
  graphql;

const { ProductType } = require("../../types/types");
const Product = require("../../../models/product/product");

const addProduct = {
  type: ProductType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    categoryID: { type: new GraphQLNonNull(GraphQLString) },
    statusHub: { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
    description: { type: GraphQLString },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    photoURL: { type: GraphQLString },
  },
  resolve(parent, args) {
    let product = new Product({
      name: args.name,
      categoryID: args.categoryID,
      statusHub: args.statusHub,
      description: args.description,
      price: args.price,
      photoURL: args.photoURL,
    });
    return product.save();
  },
};

const deleteProduct = {
  type: ProductType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Product.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addProduct, deleteProduct };
