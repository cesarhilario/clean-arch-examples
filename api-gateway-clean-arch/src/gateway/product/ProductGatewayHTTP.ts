import { ErrorHandler } from "@/shared/types/ErrorHandler";
import { ProductGateway } from "./ProductGateway";
import { ProductGatewayInputDTO } from "./dtos/ProductGatewayInputDTO";
import { ProductGatewayOutputDTO } from "./dtos/ProductGatewayOutputDTO";
import { HttpClientRepository } from "@/infra/http/HttpClientRpository";

export class ProductGatewayHTTP implements ProductGateway {
  constructor(
    readonly httpClientRepository: HttpClientRepository,
    readonly baseURL: string
  ) {}

  async create(
    body: ProductGatewayInputDTO
  ): Promise<ProductGatewayOutputDTO | ErrorHandler> {
    return await this.httpClientRepository.post<
      ProductGatewayInputDTO,
      ProductGatewayOutputDTO
    >(`${this.baseURL}/products`, body);
  }
}
