function calculateHour(time) {
    return Math.floor(time / ( 60 * 60 ));
}

function calculateMinute(time) {
    const minute = Math.floor(time / 60);
    if (minute >= 60) {
        this.calculateMinute(minute);
    } else {
        return minute;
    }
}

function calculateSec(time) {
    return time % 60;
}

export function calculateTime(time) {
    const hour = calculateHour(time);
    const minute = calculateMinute(time);
    const sec = calculateSec(time);

    return {
        hour,
        minute,
        sec
    };
}

export function timeString(time) {
    const { sec, minute, hour } = calculateTime(time);
    return `${hour}:${minute}:${sec}`;
}
