const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { AddressType } = require("../../types/types");
const Address = require("../../../models/customer/address");

const addresses = {
  type: new GraphQLList(AddressType),
  resolve(parent, args) {
    return Address.find({});
  },
};

const address = {
  type: AddressType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Address.findById(args.id);
  },
};

const addressByCustomerID = {
  type: new GraphQLList(AddressType),
  args: { customerID: { type: GraphQLID } },
  resolve(parent, args) {
    return Address.find({ customerID: args.customerID });
  },
};

module.exports = { addresses, address, addressByCustomerID };
