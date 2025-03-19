import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';
import { HttpClientModel } from '~/models/http/http-client.model';
import { HttpRequestParamsInterface } from '~/models/http/http-request-params.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService extends HttpClientModel {
  constructor(http: HttpClient) {
    super(http);
  }

  public getListCountries(): Observable<any> {
    const request: HttpRequestParamsInterface = {
      url: environment.REST_COUNTRIES_API
    };

    return this.get(request);
  }
}
