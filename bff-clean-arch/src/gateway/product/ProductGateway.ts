import { ErrorHandler } from "@/shared/types/ErrorHandler";
import { ProductGatewayInputDTO } from "./dtos/ProductGatewayInputDTO";
import type { ProductGatewayOutputDTO } from "./dtos/ProductGatewayOutputDTO";

export interface ProductGateway {
  create(
    product: ProductGatewayInputDTO
  ): Promise<ProductGatewayOutputDTO | ErrorHandler>;
}
