const FormatString = (num) => (num < 10 ? `0${num}` : num);
const FormatTime = (time) => {
    let formattedString = '';
    const min = parseInt(time / 6000);
    const sec = parseInt((time % 6000) / 100);
    const cs = time % 100;
    formattedString = `${FormatString(min)}:${FormatString(sec)}:${FormatString(
        cs
    )}`;
    return formattedString;
};

export default FormatTime;
