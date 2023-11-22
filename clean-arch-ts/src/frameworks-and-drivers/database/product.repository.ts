import { Product } from "../../business-rules/entities/product";
import { ProductGateway } from "../../interface-adapters/gateways/product.gateway";
import { ProductModel } from "./product.model";

export class ProductRepository implements ProductGateway {
  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    });
  }

  async getAll(): Promise<ProductModel[]> {
    const product = await ProductModel.findAll();
    return product;
  }
}
