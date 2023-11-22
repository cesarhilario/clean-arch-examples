import { AxiosRepository } from "@/infra/http/repository/AxiosRepository";
import { FastifyAdapter } from "./adapter/FastifyAdapter";
import { ProductController } from "@/controller/ProductController";
import { ProductGatewayHTTP, ProductGatewayOutputDTO } from "@/gateway/product";
import Fastify from "fastify";

const httpClientRepository = new AxiosRepository();
const productGateway = new ProductGatewayHTTP(
  httpClientRepository,
  "http://localhost:3003"
);

const productController = new ProductController(productGateway);

const app = Fastify();

app.post(
  "/products",
  FastifyAdapter.create<ProductGatewayOutputDTO>(
    productController.createProduct.bind(productController)
  )
);

app
  .listen({
    port: 3001,
  })
  .then(() => {
    console.log("[Fastify] - Server is listening on port 3001");
  });
