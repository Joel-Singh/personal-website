import express from "express";
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("main-pages/contact-me");
});

export default router;
