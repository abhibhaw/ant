const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql;
const { DateType, ItemType } = require("../../types/scalarTypes");

const { TransactionType } = require("../../types/types");
const Customer = require("../../../models/customer/customer");
const Transaction = require("../../../models/transaction/transaction");

const addTransaction = {
  type: TransactionType,
  args: {
    subTotal: { type: new GraphQLNonNull(GraphQLInt) },
    customerID: { type: new GraphQLNonNull(GraphQLString) },
    orderID: { type: GraphQLString },
    date: { type: new GraphQLNonNull(DateType) },
    isDebit: { type: new GraphQLNonNull(GraphQLBoolean) },
    comment: { type: GraphQLString },
  },
  resolve(parent, args) {
    let transaction = new Transaction({
      customerID: args.customerID,
      subTotal: args.subTotal,
      isDebit: args.isDebit,
      orderID: args.orderID,
      date: args.date,
      comment: args.comment,
    });
    Customer.findById(args.customerID, async (err, result) => {
      if (err) throw new Error(err);
      let wallet = parseInt(result.wallet, 10);
      if (args.isDebit) {
        wallet -= parseInt(args.subTotal, 10);
      }
      if (!args.isDebit) {
        wallet += parseInt(args.subTotal, 10);
      }
      await Customer.updateOne(
        { _id: args.customerID },
        {
          wallet: parseInt(wallet, 10),
        }
      );
    });
    return transaction.save();
  },
};

module.exports = { addTransaction };
