import { Router } from "express";
import axios from "axios";
import { CounterService } from "../service/counter-service";

const router = Router();

const counterService = new CounterService();

router.get("/", async (req, res) => {
  const counter = await counterService.getFirst();

  res.json(counter);
});

router.put("/inc", async (req, res) => {
  const counter = await counterService.increment(req.body.by);

  axios.post("http://localhost:8000/app-event/updateCounterThree", {
    payload: counter,
  });

  res.json(counter);
});

export default router;
