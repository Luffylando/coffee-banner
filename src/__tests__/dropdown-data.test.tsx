import "@testing-library/jest-dom";
import { getDropdownOptions } from "../services/api/dropdown";

test("it should return a list of items from the API", async () => {
    try {
        const response = await getDropdownOptions("hot");
        expect(Array.isArray(response.parsedOptions)).toBe(true);
    } catch (error) {
        throw error;
    }
});
