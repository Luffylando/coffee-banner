import { ReactNode } from "react";
import CloseIcon from "@assets/icons/close-icon.svg?react";

type TModal = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
};

const Modal = ({ isOpen, onClose, children, className }: TModal) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-gray-700 opacity-50"
                        onClick={onClose}></div>
                    <div
                        className={`w-full max-w-[815px]  relative z-50 bg-white p-[20px] rounded shadow-md ${className}`}>
                        <div
                            className="flex absolute top-[30px] right-[30px] justify-end cursor-pointer"
                            onClick={onClose}>
                            <CloseIcon className="text-greyTertiary" />
                        </div>
                        <div className="">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
