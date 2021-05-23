const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } =
  graphql;
const { DateType, ItemType } = require("../../types/scalarTypes");

const { SubscriptionType } = require("../../types/types");
const Subscription = require("../../../models/orders/subscription");

const addSubscription = {
  type: SubscriptionType,
  args: {
    customerID: { type: new GraphQLNonNull(GraphQLString) },
    items: {
      type: new GraphQLNonNull(GraphQLList(ItemType)),
    },
    startDate: { type: new GraphQLNonNull(DateType) },
    endDate: { type: DateType },
    addressID: { type: new GraphQLNonNull(GraphQLString) },
    frequency: { type: new GraphQLNonNull(GraphQLInt) },
    status: { type: GraphQLString },
  },
  resolve(parent, args) {
    let subscription = new Subscription({
      customerID: args.customerID,
      items: args.items,
      startDate: args.startDate,
      nextDeliveryDate: args.startDate,
      endDate: args.endDate,
      addressID: args.addressID,
      frequency: args.frequency,
      status: args.status,
    });
    return subscription.save();
  },
};

const deleteSubscription = {
  type: SubscriptionType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Subscription.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addSubscription, deleteSubscription };
