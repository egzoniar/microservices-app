import { Router } from "express";
import { CounterService } from "../service/counter-service";

const router = Router();

const counterService = new CounterService();

router.post("/updateCounterTwo", async (req, res) => {
  const payload = req.body.payload;

  const counter = await counterService.updateCounterTwo(payload);
  res.json(counter);
});

router.post("/updateCounterThree", async (req, res) => {
  const payload = req.body.payload;

  const counter = await counterService.updateCounterThree(payload);
  res.json(counter);
});

export default router;
