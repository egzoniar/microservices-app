import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

interface Counter {
  ID: Number;
  name: String;
  value: Number;
}

const db: Counter = {
  ID: 3,
  name: "Counter Three",
  value: 0,
};

app.get("/", (req, res) => {
  res.json(db);
});

app.put("/inc", (req, res) => {
  db.value += req.body.by;

  serviceOnePublishEvent({
    event: "UPDATE_COUNTER_THREE",
    data: db,
  });

  res.json(db);
});

async function serviceOnePublishEvent(payload: any) {
  axios.post("http://localhost:8000/app-event", { payload });
}

app.listen(PORT, () => {
  console.log(`Service One is listening to port ${PORT}`);
});
