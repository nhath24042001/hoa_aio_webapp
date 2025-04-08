export interface IAnnouncement {
  active: IAnnouncementChild[];
  expired: IAnnouncementChild[];
}

interface IAnnouncementChild {
  title: string;
  type?: string;
  created: string;
  personSent: string;
}

export interface IAnnouncementPayload {
  title: string;
  description: string;
  link: string;
  expiration_date: string;
  announcement_date: string;
}
