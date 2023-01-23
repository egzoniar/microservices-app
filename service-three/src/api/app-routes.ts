import express from "express";
const cors = require("cors");

import counterRoutes from "./counter-routes";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use("/counter-three", counterRoutes);

export default app;
