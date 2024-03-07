import { ButtonHTMLAttributes, ElementType } from "react";

type TButton = {
    variant?: "primary" | "secondary";
    onClick: () => void;
    type?: "button" | "submit" | null;
    children: string | JSX.Element | JSX.Element[] | React.ReactNode;
    className?: string;
    iconLeft?: ElementType;
    iconRight?: ElementType;
    disabled?: boolean;
};

const Button = ({
    children,
    onClick,
    variant,
    className,
    disabled,
    iconRight: IconRight,
    iconLeft: IconLeft,
    ...rest
}: TButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
    switch (variant) {
        case "primary":
            return (
                <button
                    disabled={disabled}
                    className={`rounded-md bg-bluePrimary px-[30px] py-[12px] text-white transition-all font-medium ${
                        disabled && "bg-greySecondary"
                    } ${className}`}
                    onClick={onClick}
                    {...rest}>
                    <div className="flex justify-center items-center text-center w-full">
                        {IconLeft && <IconLeft className="mr-[10px]" />}
                        {children}
                        {IconRight && <IconRight className="ml-[10px]" />}
                    </div>
                </button>
            );
        case "secondary":
            return (
                <button
                    className={`rounded-md border px-[30px] py-[12px] transition-all font-medium ${className}`}
                    onClick={onClick}
                    {...rest}>
                    <div className="flex justify-center items-center w-full">
                        {IconLeft && <IconLeft className="mr-[10px]" />}
                        {children}
                        {IconRight && <IconRight className="ml-[10px]" />}
                    </div>
                </button>
            );
        default:
            break;
    }
};

export default Button;
