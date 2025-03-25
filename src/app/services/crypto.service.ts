import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private _secretKey = environment.SECRET_KEY;

  public encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this._secretKey).toString();
  }

  public decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this._secretKey).toString(CryptoJS.enc.Utf8);
  }
}
