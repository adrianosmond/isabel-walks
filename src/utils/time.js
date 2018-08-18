export const TIME_LEFT = 2184710400000 - (new Date()).getTime();

export const TIME_LEFT_SECS = Math.ceil(TIME_LEFT / 1000);

export const TIME_LEFT_MINS = Math.ceil(TIME_LEFT_SECS / 60);

export const TIME_LEFT_HOURS = Math.ceil(TIME_LEFT_MINS / 60);

export const TIME_LEFT_DAYS = Math.ceil(TIME_LEFT_HOURS / 24);

export const TIME_LEFT_WEEKS = Math.ceil(TIME_LEFT_DAYS / 7);

export const TIME_LEFT_YEARS = Math.ceil(TIME_LEFT_DAYS / 365);
