import { ApolloServer } from "apollo-server"; 
import ProductAPI from "./dataSources/product_api.js";
import AuthAPI from "./dataSources/auth_api.js";
import resolvers from "./resolvers/index.js";
import typeDefs from "./typeDefs/index.js";
import authentication from "./utils/authentication.js";

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        productAPI: new ProductAPI(),
        authAPI: new AuthAPI()
    }),
    introspection: true,
    playground: true,
});

server.listen(process.env.PORT||4000).then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});

