const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { TransactionType } = require("../../types/types");
const Transaction = require("../../../models/transaction/transaction");

const transactions = {
  type: new GraphQLList(TransactionType),
  resolve(parent, args) {
    return Transaction.find({});
  },
};

const transaction = {
  type: TransactionType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Transaction.findById(args.id);
  },
};

module.exports = { transactions, transaction };
