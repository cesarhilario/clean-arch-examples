import { AxiosRepository } from "@/infra/http/repository/AxiosRepository";
import { HapiAdapter } from "./adapter/HapiAdapter";
import { ProductController } from "@/controller/ProductController";
import { ProductGatewayHTTP, ProductGatewayOutputDTO } from "@/gateway/product";
import Hapi from "@hapi/hapi";

const httpClientRepository = new AxiosRepository();
const productGateway = new ProductGatewayHTTP(
  httpClientRepository,
  "http://localhost:3003"
);

const productController = new ProductController(productGateway);

const server = Hapi.server({
  port: 3002,
  host: "localhost",
});

server.route({
  method: "POST",
  path: "/products",
  handler: HapiAdapter.create<ProductGatewayOutputDTO>(
    productController.createProduct.bind(productController)
  ),
});

server.start().then(() => {
  console.log("[Hapi] - Server is listening on port 3002");
});
