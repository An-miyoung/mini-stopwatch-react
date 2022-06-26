import React, { memo } from 'react';
import FormatTime from '../util/formatTime';

const Laps = ({ laps }) => {
    const lapTimeArray = laps.reduce((a, c) => [...a, c[1]], []);
    // const lapTimeArray =[]
    // laps.forEach((lap)=>{lapTimeArray.push(lap[1])})
    const maxIndex = lapTimeArray.indexOf(Math.max(...lapTimeArray));
    const minIndex = lapTimeArray.indexOf(Math.min(...lapTimeArray));

    const minMaxStyle = (index) => {
        if (laps.length < 2) return;
        if (index === maxIndex) return 'text-red-600';
        if (index === minIndex) return 'text-green-600';
    };

    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps.map((lap, index) => (
                    <li
                        key={lap[0]}
                        className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                            index
                        )}`}
                    >
                        <span>랩 {lap[0]}</span>
                        <span>{FormatTime(lap[1])}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default memo(Laps);
