import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
import { toCamelCase } from "../helpers/toCamelCase";

test("Test toCamelCase function return", () => {
    const res = toCamelCase("Some RANDOM sentance to test return string");
    expect(res).toEqual("someRandomSentanceToTestReturnString");
});
