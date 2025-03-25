import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, takeUntil, timer } from 'rxjs';

import { CryptoService } from './crypto.service';
import { HttpClientModel } from '../models/http/http-client.model';
import { HttpRequestParamsInterface } from '../models/http/http-request-params.interface';
import { environment } from '~/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpClientModel {
  constructor(
    http: HttpClient,
    private cryptoService: CryptoService
  ) {
    super(http);
  }

  public registerWithPhone(payload: RegisterWithPhonePayload) {
    const request: HttpRequestParamsInterface = {
      url: environment.API_URL,
      body: {
        '#request': 'register_with_phone',
        ...payload
      }
    };

    return this.post(request);
  }

  public loginWithPhone(auth_key: string) {
    const request: HttpRequestParamsInterface = {
      url: environment.API_URL,
      body: {
        '#request': 'login_with_phone',
        auth_key: auth_key
      }
    };
    return this.post(request);
  }

  public sendSMSCode(phone: string) {
    const request: HttpRequestParamsInterface = {
      url: environment.API_URL,
      body: {
        '#request': 'send_sms_code',
        phone_num: phone
      }
    };
    return this.post(request);
  }

  public verifySMSCode(phone: string, code: string) {
    const request: HttpRequestParamsInterface = {
      url: environment.API_URL,
      body: {
        '#request': 'verify_sms_code',
        phone_num: phone,
        verification_code: code
      }
    };
    return this.post(request);
  }
}
