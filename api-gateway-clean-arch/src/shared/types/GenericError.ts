export interface GenericError {
  message: string;
  code: string;
  response: {
    status: number;
  };
}
