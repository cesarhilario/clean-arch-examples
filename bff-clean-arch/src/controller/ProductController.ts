import { ErrorHandler } from "@/shared/types/ErrorHandler";
import { GenericError } from "@/shared/types/GenericError";
import {
  ProductGateway,
  ProductGatewayInputDTO,
  ProductGatewayOutputDTO,
} from "@/gateway/product";

export class ProductController {
  constructor(readonly productGateway: ProductGateway) {}

  async createUser(
    _: unknown,
    body: ProductGatewayInputDTO
  ): Promise<ProductGatewayOutputDTO | ErrorHandler | GenericError> {
    try {
      return await this.productGateway.create(body);
    } catch (err) {
      const error = err as GenericError;

      console.log(error);

      // TODO: Tratar exceções com o padrão Strategy
      return {
        statusCode: 500,
        message: "Internal server error",
        codeError: "ISE_500",
      };
    }
  }
}
