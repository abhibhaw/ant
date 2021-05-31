const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { OrderType } = require("../../types/types");
const Order = require("../../../models/orders/order");
const { GraphQLDate } = require("graphql-iso-date");

const orders = {
  type: new GraphQLList(OrderType),
  resolve(parent, args) {
    return Order.find({});
  },
};

const orderForDate = {
  type: new GraphQLList(OrderType),
  args: { date: { type: GraphQLDate } },
  resolve(parent, args) {
    const date = new Date(args.date);
    const queryDate = date.toISOString().split("T")[0];
    return Order.find({
      deliveryDate: new Date(queryDate),
      status: { $ne: "PENDING" },
    });
  },
};

const order = {
  type: OrderType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Order.findById(args.id);
  },
};

module.exports = { orders, order, orderForDate };
