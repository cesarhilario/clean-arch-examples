export interface HttpClientRepository {
  get<R, P>(url: string, params?: P): Promise<R>;
  post<B, R>(url: string, body?: B): Promise<R>;
  put<B, R>(url: string, body?: B): Promise<R>;
  patch<B, R>(url: string, body?: B): Promise<R>;
  delete<R>(url: string): Promise<R>;
}
