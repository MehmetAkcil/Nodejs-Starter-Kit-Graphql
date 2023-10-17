
import {findExample} from "../../controllers/Example.js";


const resolvers = {
    Query: {
        findExample
    },
    // Mutation: {
    //     login
    // }
};


export default resolvers