import { gql } from "apollo-server";

const saleTypeDefs = gql`
    type Sale {
        id: String!
        usernameSeller: String!
        usernameBuyer: String!
        value: Int!
        date: String!
    }

    extend type Query {
        salesByUsername(username: String!): [Sale]
    }

    extend type Mutation {
        newSale(
            usernameSeller: String!
            usernameBuyer: String!
            value: Int!
        ): Sale
    }
`;

export default saleTypeDefs;