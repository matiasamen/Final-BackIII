import { productDAO } from '../dao/Product.dao.js';

export class ProductService {
    async getAll() {
        return await productDAO.getAll();
    }

    async getById(id) {
        return await productDAO.getById(id);
    }

    async create(productData) {
        return await productDAO.create(productData);
    }

    async update(id, updatedData) {
        return await productDAO.update(id, updatedData);
    }

    async delete(id) {
        return await productDAO.delete(id);
    }
}
