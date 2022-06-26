import React, { forwardRef, memo } from 'react';

const Button = forwardRef(({ label, code, color, onClickhandler }, ref) => {
    return (
        <button
            ref={ref}
            id="lap-reset-btn"
            className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
            onClick={onClickhandler}
        >
            <p id="lap-reset-btn-label" className="text-base">
                {label}
            </p>
            <p className="text-xs">{code}</p>
        </button>
    );
});

export default memo(Button);
