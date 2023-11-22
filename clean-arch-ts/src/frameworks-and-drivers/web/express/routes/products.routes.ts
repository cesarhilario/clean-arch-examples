import express, { Request, Response } from "express";
import { CreateProductUsecase } from "../../../../business-rules/usecases/create-product/create-product.usecase.";
import { ProductRepository } from "../../../database/product.repository";
import { error } from "console";
import { ProductPresenter } from "../../../../interface-adapters/presenters/product.presenter";

export const productRouter = express.Router();

productRouter.post("/", async (req: Request, res: Response) => {
  const crateProduct;
});

productRouter.get("/", async (req: Request, res: Response) => {
  const productRepository = new ProductRepository();
  const output = await productRepository.getAll();

  res.format({
    json: () => {
      res.status(201).send(output);
    },
    xml: () => {
      const result = ProductPresenter.toXML(output[0]);
      res.send(result);
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    },
  });
});
