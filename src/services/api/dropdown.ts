import axios from "axios";
import { GET_COFFEE_OPTIONS } from "../../constants/endpoints";
import { toCamelCase } from "../../helpers/toCamelCase";

type TCoffee = {
    title: string;
    description: string;
    ingredients: string[];
    image: string;
    id: number;
};

type TOption = {
    value: string;
    label: string;
};

type TRes = {
    parsedOptions: TOption[] | [];
    data: TCoffee[];
};

export const getDropdownOptions = async (coffeeType: string) => {
    const result = await axios.get(GET_COFFEE_OPTIONS(coffeeType), {
        method: "GET"
    });

    const parsedOptions: TRes["parsedOptions"] = result?.data.map(
        (coffee: TCoffee) => {
            return { label: coffee.title, value: toCamelCase(coffee.title) };
        }
    );
    return { parsedOptions, data: result?.data };
};
