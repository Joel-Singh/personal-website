import express from "express";
const aboutMeRouter = express.Router();

aboutMeRouter.get("/", function (req, res, next) {
  res.render("main-pages/about-me");
});

export default aboutMeRouter;
