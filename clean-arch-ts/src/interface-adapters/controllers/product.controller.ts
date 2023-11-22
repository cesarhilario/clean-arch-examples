import { Request, Response } from "express";
import { CreateProductUsecase } from "../../business-rules/usecases/create-product/create-product.usecase.";
import { ProductRepository } from "../../frameworks-and-drivers/database/product.repository";

export class ProductCreateProductController {
  constructor(
    private readonly createProductUsecase: CreateProductUsecase,
    private readonly productRepository: ProductRepository
  ) {}

  async execute(req: Request, res: Response) {
    try {
      const productDto = {
        id: req.body.id,
        name: req.body.name,
        cost: req.body.cost,
      };
      const output = await this.createProductUsecase.execute(productDto);

      res.status(201).send(output);
    } catch (e) {
      res.status(500).send({ error: "Internal server error" });
    }
  }
}
