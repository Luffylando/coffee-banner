import { useStepsStore } from "../../store/store";
import { useEffect, useState } from "react";

const PreviewCoffee = () => {
    const { stepOne, stepThree, stepTwo, setBannerCode } = useStepsStore();
    const [data, setData] = useState({
        title: stepThree.title || stepOne?.title,
        description: stepThree.description || stepOne?.description,
        image: stepOne?.image,
        ingredients: stepOne?.ingredients
    });

    useEffect(() => {
        setData({
            title: stepOne?.title,
            description: stepOne?.description,
            image: stepOne?.image,
            ingredients: stepOne?.ingredients
        });
    }, [stepOne]);

    useEffect(() => {
        setData({
            title: stepThree.title || stepOne?.title,
            description: stepThree.description || stepOne?.description,
            image: stepOne?.image,
            ingredients: stepOne?.ingredients
        });
    }, [stepThree]);

    const ingredients = data?.ingredients?.map(
        (ing: string) => `
        <div style="background:#B8E3F4;color: #000000; padding: 4px 20px;font-weight:300;border-radius:8px;">
            ${ing}
        </div>`
    );

    const code = `
        <div style="box-shadow: 0px 1px 40px 0px #42424321;padding: 20px;height: 100%;border-radius: 8px;width:${stepTwo}; max-width: 98%;">
            <p style="color: #34A0DB; font-weight:600;font-size:18px;margin:0px;"> Preview:</p>
            <div style="display:flex;flex-direction:column;margin: 40px 20px 20px 20px;width:auto;border:1px solid #9A9A9F;">
                <p style="display: flex;justify-content:start;padding:12px 24px;align-items:center;height:45px;background:#424243;color:#FFFFFF;margin: 0;">
                    ${data.title}
                </p>
                <div style="padding: 24px;"}>
                    <div style="display:flex">
                        <p style="width: 75%;color:#424243;font-size:14px;font-weight:300;padding-right:10px;margin: 0;">
                            ${data.description}
                        </p>
                        <div style="width:25%">
                            <img
                                src=${data?.image}
                                alt="preview-img"
                                style="width: 100%;height: 120px; object-fit: cover;"
                            />
                        </div>
                    </div>
                    <div style="display: flex; flex-wrap:wrap; gap:10px;margin-top:20px;">
                        ${ingredients}
                    </div>
                </div>
            </div>
        </div>
        
        `;

    useEffect(() => {
        setBannerCode(code);
    }, [data]);

    if (stepOne?.image)
        return (
            <div className="shadow-cardShadow p-[20px] h-full rounded-lg w-fit mt-6 2xl:mt-0 max-w-full">
                <p className="text-bluePrimary font-bold text-[18px]">
                    Preview:
                </p>
                <div className="flex flex-col p-[20px] mt-[40px] w-[440px] max-w-full border-[1px] border-greySecondary">
                    <p className="flex justify-start px-[24px] py-[12px] items-center h-[45px] bg-grey text-white">
                        {data.title}
                    </p>
                    <div className="p-[24px]">
                        <div className="flex">
                            <p className="w-3/4 text-grey text-[14px] font-thin pr-[10px]">
                                {data.description}
                            </p>
                            {!data?.image ? (
                                <p>Loading...</p>
                            ) : (
                                <div className="w-1/4">
                                    <img
                                        src={data?.image}
                                        alt="preview-img"
                                        className="w-full h-[120px] object-cover"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-[10px] mt-[20px]">
                            {data?.ingredients?.map((ingredient: string) => (
                                <div
                                    key={ingredient}
                                    className="bg-blueSecondary text-black py-[4px] px-[20px] font-thin rounded-lg">
                                    {ingredient}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default PreviewCoffee;
