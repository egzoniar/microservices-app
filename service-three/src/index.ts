import express from "express";

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.json("Service Three");
});

app.listen(8002, () => {
  console.log("Service Three is listening to port 8002");
});
