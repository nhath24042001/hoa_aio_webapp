export interface ICalendarPayload {
  title: string;
  description: string;
  event_date: string;
}

export interface ICreateCalendarResponse extends ICommonResponse {
  event_id: number;
}

export interface IGeneralCalendar {
  event_id: number;
  title: string;
  event_type: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  participants: string[];
  registration_required: boolean;
  organizer: string;
  attachments: IAttachment[];
  rsvp: IRsvp[];
}

export interface IAttachment {
  name: string;
  url: string;
}

export interface IRsvp {
  name: string;
  status: string;
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
