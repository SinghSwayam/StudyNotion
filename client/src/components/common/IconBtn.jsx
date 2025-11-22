export default function IconBtn({
    text,
    onClick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`flex items-center ${outline ? "border text-yellow-50 border-yellow-50 bg-transparent" : `${customClasses}`
                } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 `}
            type={type}
        >
            {children ? (
                <>
                    <span className={`${outline && "text-yellow-50"}`}>{text}</span>
                    {children}
                </>
            ) : (
                text
            )}
        </button>
    )
}