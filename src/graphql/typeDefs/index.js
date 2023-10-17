
import { gql } from "apollo-server-express";

const typeDefs = gql`
    
    scalar Object
    scalar Date
   
    type Query {
        findExample: Object
    }
    
    
#    type Mutation {
#        login(email: String!, password: String!): Object,
#    }
`;

export  default  typeDefs