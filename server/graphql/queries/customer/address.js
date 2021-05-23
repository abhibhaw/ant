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

module.exports = { addresses, address };
