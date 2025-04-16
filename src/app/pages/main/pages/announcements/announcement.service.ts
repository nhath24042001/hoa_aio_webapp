import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  IAnnouncementPayload,
  IAnnouncementResponse,
  ICreateAnnouncementResponse
} from '~/@types/announcement';
import { HttpClientModel } from '~/models/http/http-client.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService extends HttpClientModel {
  constructor(http: HttpClient) {
    super(http);
  }

  public addAnnouncement(payload: IAnnouncementPayload): Observable<ICreateAnnouncementResponse> {
    return this.post(this.createRequest('Announcement', 'add_announcement', payload));
  }

  public editAnnouncement(announcement_id: string, payload: IAnnouncementPayload) {
    return this.post(
      this.createRequest('Announcement', 'edit_announcement', {
        announcement_id,
        ...payload
      })
    );
  }

  public deleteAnnouncement(announcement_id: string) {
    return this.post(
      this.createRequest('Announcement', 'delete_announcement', { announcement_id })
    );
  }

  public getAllAnnouncements(): Observable<IAnnouncementResponse> {
    return this.post(this.createRequest('Announcement', 'get_all_announcements'));
  }

  public getRecentAnnouncements() {
    return this.post(this.createRequest('Announcement', 'get_recent_announcements'));
  }
}
