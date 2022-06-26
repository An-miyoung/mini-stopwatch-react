import React, { useCallback, useEffect, useRef } from 'react';
import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const StopWatch = () => {
    const { start, pause, reset, centisecond, isRunning, createLap, laps } =
        useTimer();

    const lapResetBtnRef = useRef(null);
    const startStopBtnRef = useRef(null);

    const onKeyDown = (e) => {
        if (e.code === 'KeyL') {
            lapResetBtnRef.current.click();
        } else if (e.code === 'KeyS') {
            startStopBtnRef.current.click();
        }
    };

    useEffect(() => {
        const keydown = document.addEventListener('keydown', onKeyDown);
        return () => keydown;
    }, []);

    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button
                    ref={lapResetBtnRef}
                    label={isRunning ? '랩' : '리셋'}
                    code={'L'}
                    color={'bg-gray-600'}
                    onClickhandler={isRunning ? createLap : reset}
                />
                <Button
                    ref={startStopBtnRef}
                    label={isRunning ? '중단' : '시작'}
                    code={'S'}
                    color={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    onClickhandler={isRunning ? pause : start}
                />
            </div>
            <Laps laps={laps} />
        </section>
    );
};

export default StopWatch;
