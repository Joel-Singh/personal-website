import { Express } from "express";
import indexRouter from "../routes/index";

export default function configureRouters(app: Express) {
  app.use("/", indexRouter);
}
