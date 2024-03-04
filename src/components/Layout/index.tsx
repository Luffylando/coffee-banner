import Header from "../Header";

type TLayout = {
    children: React.ReactNode;
};

const Layout = ({ children }: TLayout) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[1440px] max-w-[1440px]">
                <Header />
                <section>{children}</section>
            </div>
        </div>
    );
};

export default Layout;
