import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";

class ProductAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.product_api_url
    }

    async products() {
        return await this.get("/products");
    }

    async productByUsername(username) {
        return await this.get(`/products/${username}`);
    }

    async newProduct(body) {
        return await this.post('/products', body);
    }

    async updateProduct(data) {
        const { username, ...body } = data;
        return await this.put(`/products/${username}`, body);
    }

    async deleteProduct(username) {
        return await this.delete(`/products/${username}`);
    }

    async salesByUsername(username) {
        return await this.get(`/sales/${username}`);
    }

    async newSale(body) {
        return await this.post('/sales', body);
    }
}

export default ProductAPI; 