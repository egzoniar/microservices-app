import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.json("Service Three");
});

app.listen(PORT, () => {
  console.log(`Service One is listening to port ${PORT}`);
});
