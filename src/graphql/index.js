import {ApolloServer} from "apollo-server-express";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
import {port} from "../config/config.js";
import jwt from "jsonwebtoken";


const startApollo = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {

            const user = {
                id: 1,
                name: "Mehmet"
            }

            if(!user) return null

            return { user }

        },
    });
    await server.start()
    server.applyMiddleware({ app });
    console.log(`Graphql http://localhost:${port}${server.graphqlPath} adresinde çalışıyor.`);
}

const getUser = async (token) => {
    try {
        if (token) {

            return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        }
        return null
    } catch (error) {
        return null
    }
}



export default startApollo;
