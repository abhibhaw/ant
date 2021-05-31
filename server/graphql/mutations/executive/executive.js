const graphql = require("graphql");
const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;
const bcrypt = require("bcryptjs");

const { ExecutiveType } = require("../../types/types");
const Executive = require("../../../models/executives/executive");

const addExecutive = {
  type: ExecutiveType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    isActive: { type: new GraphQLNonNull(GraphQLBoolean) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    photoURL: { type: GraphQLString },
    routeID: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    try {
      const doc = await Executive.findOne({ phone: args.phone });
      if (doc) throw new Error("User Already Exists");
      if (!doc) {
        const hashedPass = await bcrypt.hash(args.password, 10);
        let executive = new Executive({
          firstName: args.firstName,
          lastName: args.lastName,
          isActive: args.isActive,
          phone: args.phone,
          routeID: args.routeID,
          photoURL: args.photoURL,
          password: hashedPass,
        });
        return await executive.save();
      }
    } catch (e) {
      throw new Error(e);
    }
  },
};

const editExecutive = {
  type: ExecutiveType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLNonNull(GraphQLString) },
    routeID: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
  },
  async resolve(parent, args) {
    const hashedPass = await bcrypt.hash(args.password, 10);
    return Executive.findByIdAndUpdate(
      args.id,
      {
        firstName: args.firstName,
        lastName: args.lastName,
        phone: args.phone,
        password: hashedPass,
        routeID: args.routeID,
        isActive: args.isActive,
      },
      { runValidators: true, omitUndefined: true, new: true }
    );
  },
};

const deleteExecutive = {
  type: ExecutiveType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Executive.deleteOne({ _id: args.id }, function (err, res) {
      return "Success!";
    });
  },
};

module.exports = { addExecutive, deleteExecutive, editExecutive };
