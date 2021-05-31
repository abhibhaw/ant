const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const { addLocation, deleteLocation } = require("./geolocation/location");
const { addRegion, deleteRegion } = require("./geolocation/region");
const { addHub, deleteHub } = require("./geolocation/hub");
const { addRoute, deleteRoute } = require("./executive/route");
const {
  addExecutive,
  deleteExecutive,
  editExecutive,
} = require("./executive/executive");
const { addCategory, deleteCategory } = require("./product/category");
const { addProduct, deleteProduct } = require("./product/product");
const { addCustomer } = require("./customer/customer");
const { addAddress, deleteAddress } = require("./customer/address");
const { addSubscription, deleteSubscription } = require("./order/subscription");
const { addOrder, deleteOrder, markOrder } = require("./order/order");
const { addTransaction } = require("./transaction/transaction");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Geolocation Mutation
    addLocation,
    deleteLocation,
    addRegion,
    deleteRegion,
    addHub,
    deleteHub,
    // Executive Mutation
    addRoute,
    deleteRoute,
    addExecutive,
    deleteExecutive,
    editExecutive,
    // Product Mutation
    addCategory,
    deleteCategory,
    addProduct,
    deleteProduct,
    // Customer Mutation
    addAddress,
    deleteAddress,
    addCustomer,
    // Subscription Mutation
    addSubscription,
    deleteSubscription,
    // Order Mutation
    addOrder,
    deleteOrder,
    markOrder,
    // Transaction
    addTransaction,
  },
});

module.exports = Mutation;
