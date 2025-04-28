import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICommonResponse } from '~/@types';
import { ICalendarPayload, ICalendarResponse, ICreateCalendarResponse } from '~/@types/calendar';
import { HttpClientModel } from '~/models/http/http-client.model';
@Injectable({
  providedIn: 'root'
})
export class CalendarService extends HttpClientModel {
  /*
   * @description
   * Role: Manager
   */

  constructor(http: HttpClient) {
    super(http);
  }

  public createCalendarEvent(payload: ICalendarPayload): Observable<ICreateCalendarResponse> {
    return this.post(this.createRequest('Calender', 'create_calendar_event', payload));
  }

  public editCalendarEvent(event_id: string, payload: ICalendarPayload): Observable<ICommonResponse> {
    return this.post(
      this.createRequest('Calender', 'edit_calendar_event', {
        event_id,
        ...payload
      })
    );
  }

  public deleteCalendarEvent(event_id: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Calender', 'delete_calendar_event', { event_id }));
  }

  public getEventByDate(month: string, year: string): Observable<ICalendarResponse> {
    return this.post(this.createRequest('Calender', 'get_events_by_date', { month, year }));
  }

  public getUpcomingEvents(): Observable<ICalendarResponse> {
    return this.post(this.createRequest('Calender', 'get_upcoming_events'));
  }
}
