import { Express, RequestHandler } from "express";
import indexRouter from "../routes/index";
import aboutMeRouter from "../routes/about-me";
import contactMeRouter from "../routes/contact-me";
import portfolioRouter from "../routes/portfolio";

export default function useRouters(app: Express) {
  app.use("/", indexRouter);
  app.use("/about-me", aboutMeRouter);
  app.use("/contact-me", contactMeRouter);
  app.use("/portfolio", portfolioRouter);

  const notDonePage: RequestHandler = (req, res, next) => {
    res.status(404).render("not-done");
  };

  app.use("/resume", notDonePage);

  const notFoundPage: RequestHandler = (req, res, next) => {
    res.status(404).render("404");
  };
  app.use(notFoundPage);
}
