const graphql = require("graphql");
const { GraphQLList, GraphQLID, GraphQLString } = graphql;

const { OrderType } = require("../../types/types");
const Order = require("../../../models/orders/order");
const date = require("date-and-time");
const { GraphQLDate } = require("graphql-iso-date");
const Executive = require("../../../models/executives/executive");

const orders = {
  type: new GraphQLList(OrderType),
  resolve(parent, args) {
    return Order.find({});
  },
};

const ordersForToday = {
  type: GraphQLList(OrderType),
  resolve(parent, args) {
    const now = new Date();
    const today = date.addHours(now, 9);
    const tomorrow = date.addHours(now, 33);
    const todayQueryDate = today.toISOString().split("T")[0];
    const tomorrowQueryDate = tomorrow.toISOString().split("T")[0];
    return Order.find({
      deliveryDate: {
        $gte: new Date(todayQueryDate),
        $lt: new Date(tomorrowQueryDate),
      },
      status: { $ne: "PENDING" },
    });
  },
};

const ordersByExecutiveIDAndDate = {
  type: GraphQLList(OrderType),
  args: {
    executiveID: { type: GraphQLString },
    date: { type: GraphQLDate },
  },
  async resolve(parent, args) {
    const executive = await Executive.findById(args.executiveID);
    startDate = args.date;
    const endDate = date.addDays(startDate, 1);
    const queryStartDate = startDate.toISOString().split("T")[0];
    const queryEndDate = endDate.toISOString().split("T")[0];
    return Order.find({
      routeID: executive.routeID,
      deliveryDate: {
        $gte: new Date(queryStartDate),
        $lt: new Date(queryEndDate),
      },
      status: { $ne: "PENDING" },
    });
  },
};

const ordersForDateRange = {
  type: GraphQLList(OrderType),
  args: {
    startDate: { type: GraphQLDate },
    endDate: { type: GraphQLDate },
  },
  resolve(parent, args) {
    startDate = args.startDate;
    endArg = args.endDate;
    const endDate = date.addDays(endArg, 1);
    const queryStartDate = startDate.toISOString().split("T")[0];
    const queryEndDate = endDate.toISOString().split("T")[0];
    return Order.find({
      deliveryDate: {
        $gte: new Date(queryStartDate),
        $lt: new Date(queryEndDate),
      },
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

module.exports = {
  orders,
  order,
  ordersForToday,
  ordersByExecutiveIDAndDate,
  ordersForDateRange,
};
