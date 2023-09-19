import express from "express";
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("main-pages/about-me");
});

export default router;
