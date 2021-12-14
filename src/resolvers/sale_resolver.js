import { ApolloError } from "apollo-server-errors";

const saleResolver = {
    Query: {
        salesByUsername: async(root, { username }, { dataSources, userToken }) => {
            if (!userToken) {
                throw new ApolloError("No estás autorizado para acceder a esta información", 401);
            }
            if (username == userToken || userToken == "administrador") {
                return await dataSources.productAPI.salesByUsername(username);
            }
            throw new ApolloError("No tienes permitido acceder a esta información", 403);
        }
    },
    Mutation: {
        newSale: async(root, args, { dataSources, userToken }) => {
            if (!userToken) {
                throw new ApolloError("No estás autorizado para acceder a esta información", 401);
            }
            return await dataSources.productAPI.newSale(args);
        }
    }
}

export default saleResolver;