const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { OrderType } = require("../../types/types");
const Order = require("../../../models/orders/order");

const orders = {
  type: new GraphQLList(OrderType),
  resolve(parent, args) {
    return Order.find({});
  },
};

const order = {
  type: OrderType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Order.findById(args.id);
  },
};

module.exports = { orders, order };
