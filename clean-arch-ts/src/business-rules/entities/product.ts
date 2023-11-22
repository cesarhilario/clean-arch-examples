export class Product {
  private _id: string;
  private _name: string;
  private _cost: number;

  constructor(id?: string, name?: string) {
    this._name = name;
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  set cost(cost: number) {
    if (cost < 0) {
      throw new Error("Cost cannot be negative");
    }
    this._cost = cost;
  }

  get cost(): number {
    return this._cost;
  }

  get salesPrice(): number {
    return this._cost * 3;
  }

  get id(): string {
    return this._id;
  }
}
