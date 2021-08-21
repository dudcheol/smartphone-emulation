export const digitTwoFormat = (str) => {
    return ('0' + str).slice(-2);
};

export const convertStringToDateformat = (date) => {
    const _date = new Date(date);
    return `${_date.getFullYear()}년 ${digitTwoFormat(_date.getMonth() + 1)}월 ${digitTwoFormat(
        _date.getDate()
    )}일 ${digitTwoFormat(_date.getHours())}시 ${digitTwoFormat(
        _date.getMinutes()
    )}분 ${digitTwoFormat(_date.getSeconds())}초`;
};
