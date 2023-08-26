import { Express } from "express";
import path from "path";

export default function configureViewEngine(app: Express) {
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "views"));
}
