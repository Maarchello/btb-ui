export function getFormattedDate(date) {
    let day = date.getDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();

    return  year + '-' + month + '-' + day;
}

export function getFormattedTime(date) {
    let hours = ('0' + date.getUTCHours()).slice(-2);
    let minutes = ('0' + date.getUTCMinutes()).slice(-2);

    return hours + ':' + minutes;
}