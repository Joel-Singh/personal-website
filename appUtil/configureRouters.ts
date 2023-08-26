import { Express } from "express";
import indexRouter from "../routes/index";
import usersRouter from "../routes/users";

export default function configureRouters(app: Express) {
  app.use("/", indexRouter);
  app.use("/users", usersRouter);
}
