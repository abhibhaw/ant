const graphql = require("graphql");
const { GraphQLList, GraphQLID } = graphql;

const { RouteType } = require("../../types/types");
const Route = require("../../../models/executives/route");

const routes = {
  type: new GraphQLList(RouteType),
  resolve(parent, args) {
    return Route.find({});
  },
};

const route = {
  type: RouteType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Route.findById(args.id);
  },
};

module.exports = { routes, route };
