const { ApolloServer, gql } = require('apollo-server-express');
const _ = require('lodash');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');



const type = gql`
    type Book {
        name: String,
        author: String,
        price: Int
    }

    type Query {
       hello: String!,
       books: [Book]
    }
`;


module.exports = new ApolloServer({
                        typeDefs: type,
                        resolvers,
                        context: ({req}) => {
                            console.log(req.headers.authorization);
                        }
                    });
