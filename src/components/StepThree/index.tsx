import { useEffect, useState } from "react";

import Card from "../Card";
import Button from "../UI/Button";

import CopyIcon from "../../assets/icons/copy-code-icon.svg?react";
import StartOverIcon from "../../assets/icons/start-over-icon.svg?react";

import { TStepThree } from "../../types";
import { useStepsStore } from "../../store/store";

const StepThree = ({ toggleModal, activeStep, isDisabled }: TStepThree) => {
    const { stepOne } = useStepsStore();
    const { setStepOne, setStepTwo, setStepThree } = useStepsStore();
    const [titleValue, setTitleValue] = useState(stepOne?.title);
    const [descriptionValue, setDescriptionValue] = useState(
        stepOne?.description
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        toggleModal(true);
        setIsModalOpen(!isModalOpen);
        setStepThree({
            title: titleValue,
            description: descriptionValue
        });
    };

    const handleStartOver = () => {
        activeStep(1);
        setStepOne({
            id: 0,
            title: "",
            description: "",
            image: "",
            ingredients: []
        });
        setStepTwo("160px");
        setStepThree({ description: "", title: "" });
        setDescriptionValue("");
        setTitleValue("");
    };

    useEffect(() => {
        setTitleValue(stepOne?.title);
        setDescriptionValue(stepOne?.description);
    }, [stepOne]);

    return (
        <div
            className={`${
                isDisabled
                    ? "opacity-50 pointer-events-none"
                    : "opacity-100 pointer-events-normal"
            }`}>
            <Card title="3. Customize title and description">
                <div className="flex flex-col">
                    <div className="flex flex-col text-greyTertiary">
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            className="border h-[45px] pl-[10px] mb-[20px]"
                            type="text"
                            value={titleValue}
                            onChange={e => setTitleValue(e.target.value)}
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex flex-col text-greyTertiary">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            value={descriptionValue}
                            className="border p-[10px]"
                            id="description"
                            placeholder="Description"
                            onChange={e => setDescriptionValue(e.target.value)}
                            rows={3}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-[50px]">
                        <Button
                            iconRight={StartOverIcon}
                            variant="secondary"
                            className="font-bold border-none !p-[0px]"
                            onClick={() => handleStartOver}>
                            Start over
                        </Button>
                        <Button
                            iconLeft={CopyIcon}
                            className="font-semibold"
                            variant="primary"
                            onClick={() => handleOpenModal}>
                            View and copy code
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default StepThree;
