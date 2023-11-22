import { CreateProductOutputDTO } from "../../business-rules/usecases/create-product/create-product.dto";
import { ProductModel } from "../../frameworks-and-drivers/database/product.model";

export class ProductPresenter {
  static toXML(product: ProductModel): string {
    return `<product>
      <id>${product.id}</id>
      <name>${product.name}</name>
      <cost>${product.cost}</cost>
    </product>`;
  }
}
