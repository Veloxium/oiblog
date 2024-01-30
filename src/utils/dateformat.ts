import { format } from 'date-fns';
export const dateFormat = (date: string,): string => {
    const originalDate = new Date(date);
    const formattedDate = format(originalDate, 'd MMM yyyy');
    return formattedDate;
}