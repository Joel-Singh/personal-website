import express from "express";

import useMiddleware from "./appUtil/useMiddleware";
import configureViewEngine from "./appUtil/configureViewEngine";
import useRouters from "./appUtil/useRouters";

const app = express();

useMiddleware(app);
configureViewEngine(app);
useRouters(app);

export default app;
