import { app } from "./express";
import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../../database/product.model";

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

export let sequelize: Sequelize;

async function setupDb(): Promise<Sequelize> {
  sequelize = new Sequelize("sqlite::memory:", {
    logging: false,
  });

  sequelize.addModels([ProductModel]);
  await sequelize.sync();

  return sequelize;
}

setupDb();

export { app };
