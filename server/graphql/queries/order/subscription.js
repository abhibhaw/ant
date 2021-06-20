const graphql = require("graphql");
const { GraphQLList, GraphQLString, GraphQLNonNull } = graphql;

const { SubscriptionType } = require("../../types/types");
const Subscription = require("../../../models/orders/subscription");

const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve(parent, args) {
    return Subscription.find({});
  },
};

const subscription = {
  type: SubscriptionType,
  args: { id: { type: GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return Subscription.findById(args.id);
  },
};

const subscriptionsByCustomerID = {
  type: new GraphQLList(SubscriptionType),
  args: { customerID: { type: GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return Subscription.find({ customerID: args.customerID });
  },
};

module.exports = { subscriptions, subscription, subscriptionsByCustomerID };
