const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const { AddressType } = require("../../types/types");
const Address = require("../../../models/customer/address");

const addAddress = {
  type: AddressType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    customerID: { type: new GraphQLNonNull(GraphQLString) },
    lat: { type: GraphQLString },
    long: { type: GraphQLString },
  },
  resolve(parent, args) {
    let address = new Address({
      name: args.name,
      customerID: args.customerID,
      lat: args.lat,
      long: args.long,
    });
    return address.save();
  },
};

const deleteAddress = {
  type: AddressType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Address.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addAddress, deleteAddress };
