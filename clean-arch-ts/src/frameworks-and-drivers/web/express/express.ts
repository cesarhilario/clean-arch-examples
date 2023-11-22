import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../../database/product.model";
import { productRouter } from "./routes/products.routes";

export const app: Express = express();
app.use(express.json());

/* Registering Routes */
app.use("/products", productRouter);
