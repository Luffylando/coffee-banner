import Logo from "../../assets/icons/logo.svg?react";

const Header = () => {
    return (
        <header className="flex justify-between w-inherit h-[180px] rounded-t-[20px] items-center px-[23px] bg-grey mt-[30px] max-w-full">
            <Logo />
            <p className="text-white text-[28px]">Coffee Banner Generator</p>
        </header>
    );
};

export default Header;
