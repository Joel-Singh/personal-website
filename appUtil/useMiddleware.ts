import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

export default function useMiddleware(app: Express) {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
}
