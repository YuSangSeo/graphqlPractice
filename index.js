// import { graphql } from "graphql";
// import { graphqlYoga } from "graphql-yoga";
// import {schema} from 
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import {ApolloServer, gql} from "apollo-server";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port:9000}).then(({url})=>{
    console.log(`server ready at ${url}`)
});