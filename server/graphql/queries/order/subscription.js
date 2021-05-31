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

module.exports = { subscriptions, subscription };
