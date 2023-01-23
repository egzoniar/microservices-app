import { Prisma } from "@prisma/client";
import { CounterRepository } from "../repository/counter-repository";

export class CounterService {
  counterRepository = new CounterRepository();

  constructor() {
    this.counterRepository = new CounterRepository();
  }

  async increment(increment: number): Promise<any> {
    try {
      const updatedCounter = await this.counterRepository.increment(increment);

      return updatedCounter;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCounterTwo(payload: Prisma.InputJsonValue): Promise<any> {
    try {
      const counter = await this.counterRepository.updateCounterTwo(payload);

      return counter;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCounterThree(payload: Prisma.InputJsonValue): Promise<any> {
    try {
      const counter = await this.counterRepository.updateCounterThree(payload);

      return counter;
    } catch (error) {
      console.log(error);
    }
  }

  async getFirst(): Promise<any> {
    try {
      const counter = await this.counterRepository.getFirst();

      return counter;
    } catch (error) {
      console.log(error);
    }
  }
}
