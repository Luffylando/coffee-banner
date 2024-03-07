import type { Config } from "jest";

export default async (): Promise<Config> => {
    return {
        verbose: true,
        // testEnvironment: "jsdom",
        preset: "ts-jest",
        testEnvironment: "jest-environment-jsdom",
        setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
        transform: {
            "^.+\\.tsx?$": "ts-jest"
            // process `*.tsx` files with `ts-jest`
        },
        moduleNameMapper: {
            "\\.(gif|ttf|eot|svg|png)$":
                "<rootDir>/test/__ mocks __/fileMock.js"
        }
    };
};
