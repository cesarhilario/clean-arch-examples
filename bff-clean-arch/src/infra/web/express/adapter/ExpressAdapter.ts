import type { ErrorHandler } from "@/shared/types/ErrorHandler";
import type { Request, Response } from "express";

export class ExpressAdapter {
  static create<T>(
    fn: (params: unknown, body: unknown) => Promise<T | ErrorHandler>
  ) {
    return async (req: Request, res: Response) => {
      try {
        const result = await fn(req.params, req.body);

        if (typeof result === "object" && "statusCode" in result) {
          return res.status(result.statusCode).json(result);
        } else {
          return res.status(200).json(result);
        }
      } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
      }
    };
  }
}
