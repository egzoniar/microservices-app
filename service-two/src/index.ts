import express from "express";

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.json("Service Two");
});

app.listen(8001, () => {
  console.log("Service Two is listening to port 8001");
});
