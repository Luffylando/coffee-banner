type TRadioButton = {
    labelText: string;
    isActive: boolean;
    name: string;
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
};

const RadioButton = ({
    labelText,
    isActive,
    name,
    value,
    onClick,
    className = ""
}: TRadioButton) => {
    const parsedBorder = isActive
        ? "border-bluePrimary"
        : "border-greyTertiary";
    const parsedBg = isActive ? "bg-bluePrimary" : "bg-transparent";
    const parsedTextColor = isActive ? "text-grey" : "text-greyTertiary";

    return (
        <label
            className={`flex items-center space-x-2 cursor-pointer ${className}`}>
            <input
                type="radio"
                className="hidden"
                name={name}
                value={value}
                onClick={onClick}
            />
            <div
                className={`outer border-2 ${parsedBorder} rounded-xl h-[20px] w-[20px] flex justify-center items-center`}>
                <div
                    className={`inner ${parsedBg} rounded-full h-[12px] w-[12px] flex justify-center items-center`}
                />
            </div>
            <span className={`${parsedTextColor}`}>{labelText}</span>
        </label>
    );
};

export default RadioButton;
