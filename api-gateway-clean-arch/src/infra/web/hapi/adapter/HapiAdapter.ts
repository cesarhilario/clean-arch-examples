import { ErrorHandler } from "@/shared/types/ErrorHandler";
import { ResponseToolkit, Request } from "@hapi/hapi";

export class HapiAdapter {
  static create<T>(
    fn: (params: unknown, payload: unknown) => Promise<T | ErrorHandler>
  ) {
    return async function (req: Request, h: ResponseToolkit) {
      try {
        const response = await fn(req.params, req.payload);
        if (typeof response === "object" && "statusCode" in response) {
          return h.response(response).code(response.statusCode);
        } else {
          return h.response(response as object).code(200);
        }
      } catch (error) {
        return h.response({ message: "Internal server error" }).code(500);
      }
    };
  }
}
