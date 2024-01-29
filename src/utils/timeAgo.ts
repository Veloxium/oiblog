export default function timeAgo(timestamp: string) {
    const currentDate = new Date().getTime();
    const pastDate = new Date(timestamp).getTime();

    const timeDifference = currentDate - pastDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} hari yang lalu`;
    } else if (hours > 0) {
        return `${hours} jam yang lalu`;
    } else if (minutes > 0) {
        return `${minutes} menit yang lalu`;
    } else {
        return `${seconds} detik yang lalu`;
    }
}