import express from "express";

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.json("Service One");
});

app.listen(8000, () => {
  console.log("Service One is listening to port 8000");
});
