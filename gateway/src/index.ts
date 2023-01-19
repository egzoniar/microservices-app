import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/service_two", proxy("http://localhost:8002"));
app.use("/service_three", proxy("http://localhost:8003"));
app.use("/", proxy("http://localhost:8001")); // service one

app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`);
});
