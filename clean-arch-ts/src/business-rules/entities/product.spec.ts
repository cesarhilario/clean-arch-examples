import { Product } from "./product";

describe("products unit test", () => {
  it("should have an ID", () => {
    const product = new Product("abc", "Teste Product");
    expect(product.id).toBeDefined();
  });

  it("should have a name", () => {
    const product = new Product();
    product.name = "Product 1";
    expect(product.name).toBe("Product 1");
  });

  it("should throw an error if cost is negative", () => {
    const product = new Product();
    expect(() => {
      product.cost = -1;
    }).toThrowError("Cost cannot be negative");
  });

  it("should set the cost of a product", () => {
    const product = new Product();
    product.cost = 100;
    expect(product.cost).toBe(100);
  });

  it("should set salesPrice by three times the cost of the product", () => {
    const product = new Product();
    product.cost = 100;
    expect(product.salesPrice).toBe(300);
  });
});
