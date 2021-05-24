const graphql = require("graphql");
const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} = graphql;
const { GraphQLDateTime } = require("graphql-iso-date");
const ItemType = require("../../types/scalarTypes");

const { OrderType } = require("../../types/types");
const Order = require("../../../models/orders/order");

const addOrder = {
  type: OrderType,
  args: {
    customerID: { type: new GraphQLNonNull(GraphQLString) },
    routeID: { type: new GraphQLNonNull(GraphQLString) },
    items: {
      type: new GraphQLNonNull(GraphQLList(ItemType)),
    },
    deliveryDate: { type: new GraphQLNonNull(GraphQLDateTime) },
    isSub: { type: GraphQLBoolean },
    addressID: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: GraphQLString },
    comment: { type: GraphQLString },
  },
  resolve(parent, args) {
    let order = new Order({
      customerID: args.customerID,
      routeID: args.routeID,
      isSub: args.isSub,
      items: args.items,
      deliveryDate: args.deliveryDate,
      addressID: args.addressID,
      status: args.status,
      comment: args.comment,
    });
    return order.save();
  },
};

const deleteOrder = {
  type: OrderType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Order.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addOrder, deleteOrder };
