const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { OrderType } = require("../../types/types");
const Order = require("../../../models/orders/order");
const date = require("date-and-time");

const now = new Date();
const today = date.addHours(now, 9);

const orders = {
  type: new GraphQLList(OrderType),
  resolve(parent, args) {
    return Order.find({});
  },
};

const ordersForToday = {
  type: GraphQLList(OrderType),
  resolve(parent, args) {
    const queryDate = today.toISOString().split("T")[0];
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

module.exports = { orders, order, ordersForToday };
