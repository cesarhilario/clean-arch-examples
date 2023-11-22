import axios from "axios";
import { HttpClientRepository } from "../HttpClientRpository";
import { res } from "pino-std-serializers";

export class AxiosRepository implements HttpClientRepository {
  async get<R, P>(url: string, params?: P | undefined): Promise<R> {
    const response = await axios.get<R>(url, { params });
    return response.data;
  }

  async post<B, R>(url: string, body?: B | undefined): Promise<R> {
    const response = await axios.post<R>(url, body);
    return response.data;
  }

  async put<B, R>(url: string, body?: B | undefined): Promise<R> {
    const response = await axios.put<R>(url, body);
    return response.data;
  }

  async patch<B, R>(url: string, body?: B | undefined): Promise<R> {
    const response = await axios.patch<R>(url, body);
    return response.data;
  }

  async delete<R>(url: string): Promise<R> {
    const response = await axios.delete<R>(url);
    return response.data;
  }
}
