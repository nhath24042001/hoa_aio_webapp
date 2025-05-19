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
  registration_required: string;
  organizer: string;
  price?: string;
  attachments: IAttachment[];
  rsvp: IRsvp[];
}

export interface IClubCalendar {
  event_id: number;
  title: string;
  activity_type;
  title: string;
  start_date: string;
  trainer: string;
  end_date: string;
  location: string;
  description: string;
  max_participants: number;
  number_of_registrations: number;
  register_users: IRsvp[];
  cost?: string;
  additional_info: string;
}

export interface IAttachment {
  file_name: string;
  file_type: string;
  file_size: string;
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
