const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { CustomerType } = require("../../types/types");
const Customer = require("../../../models/customer/customer");

const customers = {
  type: new GraphQLList(CustomerType),
  resolve(parent, args) {
    return Customer.find({});
  },
};

const customer = {
  type: CustomerType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Customer.findById(args.id);
  },
};

module.exports = { customers, customer };
