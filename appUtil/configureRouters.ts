import { Express, RequestHandler } from "express";
import indexRouter from "../routes/index";
import aboutMeRouter from "../routes/about-me";

export default function configureRouters(app: Express) {
  app.use("/", indexRouter);
  app.use("/about-me", aboutMeRouter);

  const notFoundPage: RequestHandler = function (req, res, next) {
    res.status(404).render("404");
  };
  app.use(notFoundPage);
}
