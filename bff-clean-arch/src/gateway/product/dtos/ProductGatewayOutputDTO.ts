import type { ProductGatewayInputDTO } from "./ProductGatewayInputDTO";

type Data = ProductGatewayInputDTO & { id: string };

export interface ProductGatewayOutputDTO {
  data: Data;
}
