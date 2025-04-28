export interface ICalendarPayload {
  title: string;
  description: string;
  event_date: string;
}

export interface ICreateCalendarResponse extends ICommonResponse {
  event_id: number;
}

export interface ICalendar {
  event_id: number;
  title: string;
  description: string;
  event_date: string;
  community_id: number;
  created_by: string;
  created_at: string;
}

export interface ICalendarResponse extends ICommonResponse {
  events: ICalendar[];
}
