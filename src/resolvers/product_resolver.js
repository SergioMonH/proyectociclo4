const productResolver = {
    Query: {
        products: async(root, args, { dataSources }) => {
            // verificación token
            return await dataSources.productAPI.products();
        },
        productByUsername: async(root, { username }, { dataSources }) => {
            // verificación token
            return await dataSources.productAPI.productByUsername(username);
        }
    },
    Mutation: {
        newProduct: async(root, args, { dataSources }) => {
            return await dataSources.productAPI.newProduct(args);
        },
        updateProduct: async(root, args, { dataSources }) => {
            return await dataSources.productAPI.updateProduct(args);
        },
        deleteProduct: async(root, { username }, { dataSources }) => {
            return await dataSources.productAPI.deleteProduct(username);
        }
    }
}

export default productResolver;