const Button = ({ label, code, color }) => (
    <button
        id="lap-reset-btn"
        className={`bg-${color}-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md `}
    >
        <p id="lap-reset-btn-label" className="text-base">
            {label}
        </p>
        <p className="text-xs">{code}</p>
    </button>
);

export default Button;
