const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const { CustomerType } = require("../../types/types");
const Customer = require("../../../models/customer/customer");

const addCustomer = {
  type: CustomerType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    locationID: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLString },
  },
  resolve(parent, args) {
    let customer = new Customer({
      firstName: args.firstName,
      lastName: args.lastName,
      phone: args.phone,
      locationID: args.locationID,
      email: args.email,
    });
    return customer.save();
  },
};

module.exports = { addCustomer };
