import { HttpRequestParamsInterface } from "./http-request-params.interface";
import { Observable } from "rxjs";

/**
 * @Name HttpClientInterface
 * @description
 * Interface for our HttpClient wrapper
 */
export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Observable<T>;
  post<T>(parameters: HttpRequestParamsInterface): Observable<T>;
  patch<T>(parameters: HttpRequestParamsInterface): Observable<T>;
  put<T>(parameters: HttpRequestParamsInterface): Observable<T>;
  delete<T>(parameters: HttpRequestParamsInterface): Observable<T>;
}
