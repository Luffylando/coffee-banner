import Header from "../Header";

type TLayout = {
    children: React.ReactNode;
};

const Layout = ({ children }: TLayout) => {
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <div className="w-full max-w-[1440px] px-[40px] 2xl:px-0">
                <Header />
                <section>{children}</section>
            </div>
        </div>
    );
};

export default Layout;
