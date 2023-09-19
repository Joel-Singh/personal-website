import express from "express";
const contactMeRouter = express.Router();

contactMeRouter.get("/", function (req, res, next) {
  res.render("main-pages/contact-me");
});

export default contactMeRouter;
