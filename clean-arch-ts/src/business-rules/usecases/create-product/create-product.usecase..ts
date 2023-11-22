import { Product } from "../../entities/product";
import { ProductGateway } from "../../../interface-adapters/gateways/product.gateway";
import {
  CreateProductInputDTO,
  CreateProductOutputDTO,
} from "./create-product.dto";

export class CreateProductUsecase {
  _productGateway: ProductGateway;

  constructor(productGateway: ProductGateway) {
    this._productGateway = productGateway;
  }

  async execute(input: CreateProductInputDTO): Promise<CreateProductOutputDTO> {
    const product = new Product(input.id, input.name);
    product.cost = input.cost;

    await this._productGateway.create(product);

    return {
      id: product.id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    };
  }
}
