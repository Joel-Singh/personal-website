import express from "express";
const portfolioRouter = express.Router();

portfolioRouter.get("/", function (req, res, next) {
  res.render("main-pages/portfolio");
});

export default portfolioRouter;
