import { PrismaClient } from "@prisma/client";

const { counter: CounterModel } = new PrismaClient();

export class CounterRepository {
  /**
   * Increment counter by given value
   * Prisma.counterGetPayload<{}> is the type of the return value of the update method of the counter model in Prisma Client
   * (see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#update)
   */
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
