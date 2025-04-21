import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICommonResponse } from '~/@types';
import { HttpClientModel } from '~/models/http/http-client.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService extends HttpClientModel {
  constructor(http: HttpClient) {
    super(http);
  }

  public uploadFileBase64(file: File): Observable<ICommonResponse> {
    const reader = new FileReader();

    return new Observable<ICommonResponse>((observer) => {
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];

        const payload = {
          file_name: file.name,
          file_data: base64String
        };

        this.post(this.createRequest('File', 'upload_file_base64', payload)).subscribe({
          next: (response) => {
            observer.next(response as ICommonResponse);
            observer.complete();
          },
          error: (error) => {
            observer.error(error);
          }
        });
      };

      reader.onerror = (error) => {
        observer.error(error);
      };

      reader.readAsDataURL(file);
    });
  }
}
