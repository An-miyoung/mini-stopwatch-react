import React from 'react';
import FormatTime from '../util/formatTime.js';

const Timer = ({ centisecond }) => {
    return (
        <h1
            id="timer"
            className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words"
        >
            {FormatTime(centisecond)}
        </h1>
    );
};

export default Timer;
