const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const { RouteType } = require("../../types/types");
const Route = require("../../../models/executives/route");

const addRoute = {
  type: RouteType,
  args: {
    routeName: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    let route = new Route({
      routeName: args.routeName,
    });
    return route.save();
  },
};

const deleteRoute = {
  type: RouteType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Route.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addRoute, deleteRoute };
