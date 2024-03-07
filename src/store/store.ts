// store.ts
import { create } from "zustand";
import { TCoffee } from "../types";

type TStepThree = {
    title?: string;
    description?: string;
};

type TSteps = {
    stepOne: TCoffee | null;
    stepTwo: string;
    stepThree: TStepThree;
    activeStep: number;
    bannerCode: string;
    setStepOne: (data: TCoffee | null) => void;
    setStepTwo: (data: string) => void;
    setStepThree: (data: TStepThree) => void;
    setBannerCode: (code: string) => void;
};

export const useStepsStore = create<TSteps>(set => ({
    stepOne: {
        title: "",
        description: "",
        ingredients: [],
        image: "",
        id: 0
    },
    stepTwo: "",
    stepThree: {
        title: "",
        description: ""
    },
    activeStep: 1,
    bannerCode: "",
    setActiveStep: (data: number) => set(() => ({ activeStep: data })),
    setStepOne: (data: TCoffee | null) => set(() => ({ stepOne: data })),
    setStepTwo: (data: string) => set(() => ({ stepTwo: data })),
    setStepThree: (data: TStepThree) => set(() => ({ stepThree: data })),
    setBannerCode: (code: string) => set(() => ({ bannerCode: code }))
}));
