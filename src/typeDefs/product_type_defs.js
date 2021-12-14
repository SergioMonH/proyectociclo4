import { gql } from "apollo-server";

const productTypeDefs = gql`
    type Product {
        username: String!
        balance: Int!
        lastChange: String!
    }

    type Query {
        products: [Product]
        productByUsername(username: String!): Product
    }

    type Mutation {
        newProduct(
            username: String!
            balance: Int!
            lastChange: String!
        ): Product
        updateProduct(
            username: String!
            balance: Int!
        ): Product
        deleteProduct(username: String!): Product
    }
`;

export default productTypeDefs;