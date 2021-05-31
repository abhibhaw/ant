const graphql = require("graphql");

const { GraphQLObjectType } = graphql;

const { regions, region } = require("./geolocation/region");
const { hubs, hub } = require("./geolocation/hub");
const { locations, location } = require("./geolocation/location");
const { routes, route } = require("./executive/route");
const { executives, executive } = require("./executive/executive");
const { categories, category } = require("./product/category");
const { products, product } = require("./product/product");
const { customers, customer } = require("./customer/customer");
const {
  addresses,
  address,
  addressByCustomerID,
} = require("./customer/address");
const { subscriptions, subscription } = require("./order/subscription");
const { order, orders, orderForDate } = require("./order/order");
const { transactions, transaction } = require("./transaction/transaction");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Geolocations
    locations: locations,
    location: location,
    regions: regions,
    region: region,
    hubs: hubs,
    hub: hub,
    // Executives
    routes: routes,
    route: route,
    executives: executives,
    executive: executive,
    // Products
    categories: categories,
    category: category,
    products: products,
    product: product,
    // Customer
    customers: customers,
    customer: customer,
    addresses: addresses,
    address: address,
    addressByCustomerID: addressByCustomerID,
    // Subscription
    subscription: subscription,
    subscriptions: subscriptions,
    // Order
    orders: orders,
    order: order,
    orderForDate: orderForDate,
    // Transaction
    transactions: transactions,
    transaction: transaction,
  },
});

module.exports = RootQuery;
