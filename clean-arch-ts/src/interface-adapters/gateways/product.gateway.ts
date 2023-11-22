import { Product } from "../../business-rules/entities/product";
import { ProductModel } from "../../frameworks-and-drivers/database/product.model";

export interface ProductGateway {
  create(product: Product): Promise<void>;
  getAll(): Promise<ProductModel[]>;
}
