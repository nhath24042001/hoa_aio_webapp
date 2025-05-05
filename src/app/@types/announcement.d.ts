import { ICommonResponse } from '.';

export interface IAnnouncementPayload {
  title: string;
  description: string;
  link: string;
  expiration_date: string | Date;
  announcement_date: string | Date;
  announcement_date: string;
  user_types: string[];
  is_draft: boolean;
}

export interface IAnnouncement {
  id: number;
  title: string;
  description: string;
  media: null | string;
  link: string;
  expiration_date: string;
  date: string;
  created_on: string;
  updated_on: string;
  is_draft: number;
}

export interface IAnnouncementResponse extends ICommonResponse {
  announcements: IAnnouncement[];
}

export interface ICreateAnnouncementResponse extends ICommonResponse {
  announcement_id: number;
}
