import { AxiosRepository } from "@/infra/http/repository/AxiosRepository";
import { ExpressAdapter } from "./adapter/ExpressAdapter";
import { ProductController } from "@/controller/ProductController";
import { ProductGatewayHTTP, ProductGatewayOutputDTO } from "@/gateway/product";

import Express from "express";

const httpClientRepository = new AxiosRepository();
const productGateway = new ProductGatewayHTTP(
  httpClientRepository,
  "http://localhost:3003"
);
const productController = new ProductController(productGateway);

const app = Express();
app.use(Express.json());

app.post(
  "/products",
  ExpressAdapter.create<ProductGatewayOutputDTO>(
    productController.createProduct.bind(productController)
  )
);

app.listen(3000, () => {
  console.log("[Express] - Server is listening on port 3000");
});
