import { useState, useEffect } from "react";
import Select from "react-select";

import { getDropdownOptions } from "../../services/api/dropdown";

import Card from "../Card";
import RadioButton from "../RadioButton";
import Button from "../UI/Button";
import { TStepOne, TOption, TCoffee, TCoffeeData } from "../../types";
import { useStepsStore } from "../../store/store";

const StepOne = ({ activeStep }: TStepOne) => {
    const { stepOne, setStepOne } = useStepsStore();
    const [activeCoffeeChoice, setActiveCoffeeChoice] = useState("Hot Coffee");
    const [activeOptions, setActiveOptions] = useState<TOption[] | []>([]);
    const [selectedOption, setSelectedOption] = useState<TOption | null>(null);
    const [coffeeData, setCoffeeData] = useState<TCoffee | null>(null);
    const [results, setResults] = useState<TCoffeeData | null>(null);

    const handleSelectChange = (selectedOption: TOption | null) => {
        setSelectedOption(selectedOption as TOption);
    };

    const handleChange = async (e: React.MouseEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement;

        if (activeCoffeeChoice !== inputElement.value) {
            setActiveCoffeeChoice(inputElement.value);
        }
    };

    useEffect(() => {
        const getInitialOptions = async () => {
            const coffeeType =
                activeCoffeeChoice === "Iced Coffee" ? "iced" : "hot";
            const res = await getDropdownOptions(coffeeType);
            setActiveOptions(res.parsedOptions);
            setResults(res);
            return res;
        };
        getInitialOptions();
        setSelectedOption(null);
    }, [activeCoffeeChoice]);

    useEffect(() => {
        const filtered =
            results &&
            results.data.filter(
                (ele: TCoffee) =>
                    ele.title.toLowerCase() ===
                    selectedOption?.label.toLowerCase()
            )[0];
        setCoffeeData(filtered);
    }, [selectedOption]);

    useEffect(() => {
        if (stepOne?.title === "" && stepOne?.description === "") {
            setActiveCoffeeChoice("Hot Coffee");
            setSelectedOption(null);
        }
    }, [stepOne]);

    return (
        <div className="" data-testid="step-one-wrapper">
            <Card title="1. Select your coffee">
                <RadioButton
                    labelText="Hot coffee"
                    isActive={activeCoffeeChoice === "Hot Coffee"}
                    name="hotCoffee"
                    onClick={handleChange}
                    value="Hot Coffee"
                    className="mb-[20px]"
                />
                <RadioButton
                    labelText="Iced coffee"
                    isActive={activeCoffeeChoice === "Iced Coffee"}
                    name="icedCoffee"
                    onClick={handleChange}
                    value="Iced Coffee"
                    className="mb-[20px]"
                />
                <Select
                    options={activeOptions}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    isClearable={true}
                    placeholder="Select an option"
                />
                <div className="flex w-full justify-end mt-[30px]">
                    <Button
                        className="step-one-btn"
                        disabled={!selectedOption}
                        type="button"
                        variant="primary"
                        onClick={() => {
                            setStepOne(coffeeData);
                            activeStep(2);
                        }}>
                        Next Step
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default StepOne;
