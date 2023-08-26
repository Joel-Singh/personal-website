import express from "express";

import useMiddleware from "./appUtil/useMiddleware";
import configureViewEngine from "./appUtil/configureViewEngine";
import configureRouters from "./appUtil/configureRouters";

const app = express();

useMiddleware(app);
configureViewEngine(app);
configureRouters(app);

export default app;
