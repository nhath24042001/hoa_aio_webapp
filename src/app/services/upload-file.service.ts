/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';

import { HttpClientModel } from '~/models/http/http-client.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService extends HttpClientModel {
  constructor(http: HttpClient) {
    super(http);
  }

  public uploadFileBase64(file: File): Observable<any> {
    return from(this.fileToBase64(file)).pipe(
      switchMap((base64) => {
        const payload = {
          file_name: file.name,
          file_data: `data:${file.type};base64,${base64}`
        };
        return this.post(this.createRequest('File', 'upload_file_base64', payload));
      })
    );
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        resolve(base64);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }
}
