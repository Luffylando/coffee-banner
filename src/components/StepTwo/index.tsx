import { useEffect, useState } from "react";

import Card from "../Card";
import RadioButton from "../RadioButton";
import Button from "../UI/Button";

import { useStepsStore } from "../../store/store";

import { TStepTwo } from "../../types";

const StepTwo = ({ activeStep, isDisabled }: TStepTwo) => {
    const { setStepTwo, stepTwo } = useStepsStore();
    const [activeStepTwo, setActiveStepTwo] = useState("160px");

    useEffect(() => {
        if (stepTwo) {
            setActiveStepTwo(stepTwo);
        }
    }, [stepTwo]);

    const isCustomActive =
        activeStepTwo !== "160px" &&
        activeStepTwo !== "300px" &&
        activeStepTwo !== "100%";

    return (
        <div
            className={`${
                isDisabled
                    ? "opacity-50 pointer-events-none"
                    : "opacity-100 pointer-events-normal"
            }`}>
            <Card title="2. Choose your width">
                <div className="flex gap-x-[25px] w-full h-[180px] justify-between items-center">
                    <div className="flex items-center w-[13%] h-full py-[10px] bg-greyQuaternary">
                        <RadioButton
                            labelText="160px"
                            isActive={activeStepTwo === "160px"}
                            name="160px"
                            value="160px"
                            onClick={() => setActiveStepTwo("160px")}
                        />
                    </div>
                    <div className="flex items-center w-[30%] h-full py-[10px] bg-greyQuaternary">
                        <RadioButton
                            labelText="300px"
                            isActive={activeStepTwo === "300px"}
                            name="300px"
                            value="300px"
                            onClick={() => setActiveStepTwo("300px")}
                        />
                    </div>
                    <div className="flex items-center w-1/2 h-full py-[10px] bg-greyQuaternary">
                        <RadioButton
                            labelText="100%"
                            isActive={activeStepTwo === "100%"}
                            name="100%"
                            value="100%"
                            onClick={() => setActiveStepTwo("100%")}
                        />
                    </div>
                </div>
                <div className="flex items-center ml-[10px] mt-[12px] text-greyTertiary">
                    <RadioButton
                        labelText="custom"
                        isActive={isCustomActive}
                        name="custom"
                        value="custom"
                        onClick={() => setActiveStepTwo("custom")}
                    />
                    <input
                        className="ml-[40px] pl-[10px] w-[90px] h-[45px] border-2 rounded-md"
                        type="number"
                        step={1}
                        placeholder="200"
                        onChange={e => setActiveStepTwo(e.target.value)}
                    />
                    <span className="ml-[10px]" />
                    px
                </div>
                <div className="flex w-full justify-end">
                    <Button
                        className="mt-[20px] step-two-btn"
                        variant="primary"
                        onClick={() => {
                            setStepTwo(activeStepTwo);
                            activeStep(3);
                        }}>
                        Next Step
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default StepTwo;
