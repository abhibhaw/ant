const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } =
  graphql;
const { GraphQLDateTime } = require("graphql-iso-date");
const ItemType = require("../../types/scalarTypes");

const { SubscriptionType } = require("../../types/types");
const Subscription = require("../../../models/orders/subscription");

const addSubscription = {
  type: SubscriptionType,
  args: {
    customerID: { type: new GraphQLNonNull(GraphQLString) },
    items: {
      type: new GraphQLNonNull(GraphQLList(ItemType)),
    },
    startDate: { type: new GraphQLNonNull(GraphQLDateTime) },
    endDate: { type: GraphQLDateTime },
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

const editSubscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    items: {
      type: GraphQLList(ItemType),
    },
    nextDeliveryDate: { type: GraphQLDateTime },
    endDate: { type: GraphQLDateTime },
    addressID: { type: GraphQLString },
    frequency: { type: GraphQLInt },
    status: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Subscription.findByIdAndUpdate(
      args.id,
      {
        items: args.items,
        nextDeliveryDate: args.nextDeliveryDate,
        endDate: args.endDate,
        addressID: args.addressID,
        frequency: args.frequency,
        status: args.status,
      },
      { runValidators: true, omitUndefined: true, new: true }
    );
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

module.exports = { addSubscription, deleteSubscription, editSubscription };
