import { PrismaClient } from "@prisma/client";

const { counter: CounterModel } = new PrismaClient();

export class CounterRepository {
  async increment(increment: number): Promise<any> {
    try {
      const counter = await CounterModel.findFirst();
      if (!counter) {
        throw new Error("Counter not found");
      }

      const updatedCounter = await CounterModel.update({
        where: { id: counter.id },
        data: { value: counter.value + increment },
      });

      return updatedCounter;
    } catch (error) {
      console.log(error);
    }
  }

  async getFirst(): Promise<any> {
    try {
      const counter = await CounterModel.findFirst();
      if (!counter) {
        throw new Error("Counter not found");
      }

      return counter;
    } catch (error) {
      console.log(error);
    }
  }
}
