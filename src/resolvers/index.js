import lodash from "lodash";
import productResolver from "./product_resolver.js";
import authResolver from "./auth_resolver.js";
import saleResolver from "./sale_resolver.js";

const resolvers = lodash.merge(productResolver, saleResolver, authResolver);

export default resolvers;