const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { ExecutiveType } = require("../../types/types");
const Executive = require("../../../models/executives/executive");

const executives = {
  type: new GraphQLList(ExecutiveType),
  resolve(parent, args) {
    return Executive.find({});
  },
};

const executive = {
  type: ExecutiveType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Executive.findById(args.id);
  },
};

module.exports = { executives, executive };
