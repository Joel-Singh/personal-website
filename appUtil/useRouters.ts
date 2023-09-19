import { Express, RequestHandler } from "express";
import indexRouter from "../routes/index";
import aboutMeRouter from "../routes/about-me";
import contactMeRouter from "../routes/contact-me";

export default function useRouters(app: Express) {
  app.use("/", indexRouter);
  app.use("/about-me", aboutMeRouter);
  app.use("/contact-me", contactMeRouter);

  const notDonePage: RequestHandler = (req, res, next) => {
    res.status(404).render("not-done");
  };

  app.use("/portfolio", notDonePage);
  app.use("/resume", notDonePage);

  const notFoundPage: RequestHandler = (req, res, next) => {
    res.status(404).render("404");
  };
  app.use(notFoundPage);
}
