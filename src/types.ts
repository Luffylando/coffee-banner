export type TOption = {
    value: string;
    label: string;
};

export type TCoffee = {
    title: string;
    description: string;
    ingredients: string[];
    image: string;
    id: number;
};

export type TStepOne = {
    activeStep: (step: number) => void;
    isDisabled: boolean;
};

export type TCoffeeData = {
    parsedOptions: TOption[] | [];
    data: TCoffee[];
};

export type TStepTwo = {
    activeStep: (step: number) => void;
    isDisabled: boolean;
};

export type TStepThree = {
    toggleModal: (isOpen: boolean) => void;
    activeStep: (step: number) => void;
    isDisabled: boolean;
};
