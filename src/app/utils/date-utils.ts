import dayjs from 'dayjs';

export const formattedDate = (date: string | Date) => {
  return dayjs(date).format('D MMMM, YYYY');
};
