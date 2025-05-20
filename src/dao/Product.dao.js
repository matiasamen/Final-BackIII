import { ProductModel } from '../models/Product.model.js';

export class ProductDAO {
    async getAll() {
        return ProductModel.find();
    }

    async getById(id) {
        return ProductModel.findById(id);
    }

    async create(productData) {
        return ProductModel.create(productData);
    }

    async update(id, updatedData) {
        return ProductModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async delete(id) {
        return ProductModel.findByIdAndDelete(id);
    }
}

export const productDAO = new ProductDAO();
