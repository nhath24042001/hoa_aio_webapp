import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '~/environments/environment';

import { HttpClientInterface } from './http-client.interface';
import { HttpRequestParamsInterface } from './http-request-params.interface';

@Injectable()
export class HttpClientModel implements HttpClientInterface {
  private DEFAULT_CONTENT_TYPE = 'application/json';
  private _customizeHeaders = new HttpHeaders();
  protected token = environment.TOKEN;

  constructor(private http: HttpClient) {
    this._customizeHeaders.append('Content-Type', this.DEFAULT_CONTENT_TYPE);
  }

  protected createRequest(moduleName: string, action: string, additionalBody: object = {}) {
    return {
      url: environment.API_URL,
      body: {
        '#request': `${moduleName}/${action}`,
        '#token': this.token,
        ...additionalBody
      }
    };
  }

  public get<T>(parameters: HttpRequestParamsInterface): Observable<T> {
    const { url, responseType } = parameters;

    return this.http
      .get<T>(url, {
        ...this._customizeHeaders,
        observe: 'body',
        responseType: responseType as 'json'
      })
      .pipe(
        map((response) => response as T),
        catchError(this.handleError)
      );
  }

  public post<T>(parameters: HttpRequestParamsInterface): Observable<T> {
    const { url, body } = parameters;

    return this.http.post<T>(url, body, { ...this._customizeHeaders, observe: 'body' }).pipe(
      map((response) => response as T),
      catchError(this.handleError)
    );
  }

  public patch<T>(parameters: HttpRequestParamsInterface): Observable<T> {
    const { url, body } = parameters;

    return this.http.patch<T>(url, body, { ...this._customizeHeaders, observe: 'body' }).pipe(
      map((response) => response as T),
      catchError(this.handleError)
    );
  }

  public put<T>(parameters: HttpRequestParamsInterface): Observable<T> {
    const { url, body } = parameters;

    return this.http.put<T>(url, body, { ...this._customizeHeaders, observe: 'body' }).pipe(
      map((response) => response as T),
      catchError(this.handleError)
    );
  }

  public delete<T>(parameters: HttpRequestParamsInterface): Observable<T> {
    const { url } = parameters;

    return this.http.delete<T>(url, { ...this._customizeHeaders, observe: 'body' }).pipe(
      map((response) => response as T),
      catchError(this.handleError)
    );
  }

  protected handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
}
