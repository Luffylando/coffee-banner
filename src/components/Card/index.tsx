type TCard = {
    title: string;
    children: React.ReactNode;
};

const Card = ({ title, children }: TCard) => {
    return (
        <div className="w-[800px] rounded-md shadow-cardShadow">
            <p className="px-[26px] py-[12px] text-white rounded-t-md  w-full bg-grey">
                {title}
            </p>
            <div className="px-[24px] py-[20px]">{children}</div>
        </div>
    );
};

export default Card;
