import { useEffect, useRef, useState } from "react";

import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import PreviewCoffee from "@/components/Preview";
import Modal from "@/components/Modal";
import Button from "@/components/UI/Button";
import CopyIcon from "@assets/icons/copy-icon.svg?react";
import { useStepsStore } from "@/store/store";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Homepage = () => {
    const { bannerCode } = useStepsStore();
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [activeWindow, setActiveWindow] = useState(1);
    const toggleModal = (data: boolean) => {
        setIsModal(data);
    };

    const activeStep = (step: number) => {
        setActiveWindow(step);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopied(false);
        }, 2500);
        return () => {
            clearTimeout(timeout);
        };
    }, [copied]);

    return (
        <div className="px-[23px] py-[20px]">
            <div>
                <p className="font-semibold text-[24px] my-[20px]">
                    Welcome to the ThinkIT Coffee Banner Generator
                </p>
                <p className="font-medium text-[16px] mb-[20px]">
                    With this tool you are able to quickly craft your ideal
                    coffee banner! Choose your blend and customize every detail
                    for a a captivating brew display.
                </p>
                <p className="font-medium text-[20px] mb-[20px]">
                    Simply complete the three easy steps below, and see your
                    preview update as you go. Then view, copy and paste.
                </p>
            </div>
            <div className="flex justify-between mt-[40px]">
                <div className="flex flex-col gap-y-[36px]">
                    <StepOne
                        // stepOneData={stepOneData}
                        activeStep={activeStep}
                        isDisabled={false}
                    />
                    <StepTwo
                        // stepTwoData={stepTwoData}
                        activeStep={activeStep}
                        isDisabled={activeWindow < 2}
                    />
                    <StepThree
                        // stepThreeData={stepThreeData}
                        toggleModal={toggleModal}
                        activeStep={activeStep}
                        isDisabled={activeWindow < 3}
                    />
                </div>
                <PreviewCoffee />
            </div>
            <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
                <div className="flex flex-col pt-[40px] max-h-[80vh]">
                    <p className="text-greyTertiary font-semibold text-[24px] text-center mb-[20px]">
                        That’s it! All done!
                    </p>
                    <p className="text-greyTertiary text-[18px] text-center font-medium mb-[20px]">
                        Simply copy the code below, and paste it into your
                        website!
                    </p>
                    <div className="border-[1px] border-greyBorder p-[10px] text-greyTertiary overflow-auto">
                        <code className="text-[12px] read-only" ref={codeRef}>
                            {bannerCode}
                        </code>
                    </div>

                    <div className="relative flex w-full mt-[30px] justify-end">
                        <CopyToClipboard
                            text={bannerCode}
                            onCopy={() => setCopied(true)}>
                            <Button
                                iconLeft={CopyIcon}
                                className=" font-semibold w-fit"
                                variant="primary"
                                onClick={() => console.log("clicked")}>
                                Copy to clipboard
                            </Button>
                        </CopyToClipboard>
                        {copied ? (
                            <div className="absolute top-[-40px] border-2 right-0 w-[100px] bg-white border-grey rounded-lg px-[20px] py-[4px]">
                                Copied!
                            </div>
                        ) : null}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Homepage;
