import express from "express";
const cors = require("cors");

import counterRoutes from "./counter-routes";
import appEventRoutes from "./app-event-routes";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use("/counter-one", counterRoutes);
app.use("/app-event", appEventRoutes);

export default app;
