import { ICommonResponse } from '.';

export interface IAnnouncementPayload {
  title: string;
  description: string;
  link: string;
  expiration_date: string | Date;
  announcement_date: string;
}

export interface IAnnouncement {
  id: number;
  title: string;
  description: string;
  media: unknown;
  link: string;
  expiration_date: string | Date;
  created_on: string;
  updated_on: string;
}

export interface IAnnouncementResponse extends ICommonResponse {
  announcements: IAnnouncement[];
}

export interface ICreateAnnouncementResponse extends ICommonResponse {
  announcement_id: number;
}
