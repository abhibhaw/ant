const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} = graphql;
const Hub = require("../../models/geolocation/hub");
const Region = require("../../models/geolocation/region");
const Location = require("../../models/geolocation/location");
const Route = require("../../models/executives/route");
const Executive = require("../../models/executives/executive");
const Category = require("../../models/product/category");
const Product = require("../../models/product/product");
const Address = require("../../models/customer/address");

// -----------------------------------------------Geolocation Types Starts----------------------------------------------
const HubType = new GraphQLObjectType({
  name: "Hub",
  fields: () => ({
    id: { type: GraphQLID },
    hubName: { type: GraphQLString },
    address: { type: GraphQLString },
    mobileNo: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RegionType = new GraphQLObjectType({
  name: "Region",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    hubID: { type: GraphQLString },
    hub: {
      type: HubType,
      resolve(parent, args) {
        return Hub.findById(parent.hubID);
      },
    },
    locations: {
      type: new GraphQLList(LocationType),
      resolve(parent, args) {
        return Location.find({ regionID: parent.id });
      },
    },
  }),
});

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    regionID: { type: GraphQLString },
    routeID: { type: GraphQLString },
    region: {
      type: RegionType,
      resolve(parent, args) {
        return Region.findById(parent.regionID);
      },
    },
    route: {
      type: RouteType,
      resolve(parent, args) {
        return Route.findById(parent.routeID);
      },
    },
  }),
});

// -----------------------------------------------Executives Types Start----------------------------------------------------

const RouteType = new GraphQLObjectType({
  name: "Route",
  fields: () => ({
    id: { type: GraphQLID },
    routeName: { type: GraphQLString },
    executive: {
      type: GraphQLList(ExecutiveType),
      resolve(parent, args) {
        return Executive.find({ routeID: parent.id });
      },
    },
    locations: {
      type: GraphQLList(LocationType),
      resolve(parent, args) {
        return Location.find({ routeID: parent.id });
      },
    },
  }),
});

const ExecutiveType = new GraphQLObjectType({
  name: "Executive",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    routeID: { type: GraphQLString },
    route: {
      type: RouteType,
      resolve(parent, args) {
        return Route.findById(parent.routeID);
      },
    },
  }),
});

// -----------------------------------------------Product Types Start----------------------------------------------------

const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    products: {
      type: GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({ categoryID: parent.id });
      },
    },
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    categoryID: { type: GraphQLString },
    description: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    price: { type: GraphQLInt },
    statusHub: { type: GraphQLList(GraphQLString) },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Category.findById(parent.categoryID);
      },
    },

    hubs: {
      type: GraphQLList(HubType),
      resolve(parent, args) {
        return Hub.find({ _id: { $in: parent.statusHub } });
      },
    },
  }),
});

// -----------------------------------------------Customer Types Start----------------------------------------------------

const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    customerID: { type: GraphQLString },
    lat: { type: GraphQLString },
    long: { type: GraphQLString },
  }),
});

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    wallet: { type: GraphQLInt },
    phone: { type: GraphQLString },
    locationID: { type: GraphQLString },
    email: { type: GraphQLString },
    location: {
      type: LocationType,
      resolve(parent, args) {
        return Location.findById(parent.locationID);
      },
    },
    addresses: {
      type: GraphQLList(AddressType),
      resolve(parent, args) {
        return Address.find({ customerID: parent.id });
      },
    },
  }),
});

// -----------------------------------------------------Exports Here----------------------------------------------------------

module.exports = {
  HubType,
  RegionType,
  LocationType,
  RouteType,
  ExecutiveType,
  CategoryType,
  ProductType,
  AddressType,
  CustomerType,
};
