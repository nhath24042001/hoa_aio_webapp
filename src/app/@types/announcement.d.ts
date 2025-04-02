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
