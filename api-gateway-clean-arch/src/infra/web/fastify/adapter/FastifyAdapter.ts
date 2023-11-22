import { ErrorHandler } from "@/shared/types/ErrorHandler";
import { FastifyRequest, FastifyReply } from "fastify";

type FastifyAdapterFunction<T> = (
  req: unknown,
  res: unknown
) => Promise<T | ErrorHandler>;

export class FastifyAdapter {
  static create<T>(fn: FastifyAdapterFunction<T>) {
    return async function (req: FastifyRequest, res: FastifyReply) {
      try {
        const response = await fn(req.params, req.body);

        if (typeof response === "object" && "statusCode" in response) {
          return res.status(response.statusCode).send(response);
        } else {
          return res.status(200).send(response);
        }
      } catch (error) {
        return res.status(500).send({ message: "Internal server error" });
      }
    };
  }
}
