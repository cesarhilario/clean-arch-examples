import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export class ProductModel extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.FLOAT)
  cost: number;

  @Column(DataType.FLOAT)
  salesPrice: number;
}
