import { Express } from "express";
import indexRouter from "../routes/index";
import aboutMeRouter from "../routes/about-me";

export default function configureRouters(app: Express) {
  app.use("/", indexRouter);
  app.use("/about-me", aboutMeRouter);
}
