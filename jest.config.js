const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@type/(.*)$": "<rootDir>/core/types/$1",
    "^@components/(.*)$": "<rootDir>/core/components/$1",
    "^@utils/(.*)$": "<rootDir>/core/utils/$1",
    "^@hooks/(.*)$": "<rootDir>/core/hooks/$1",
    "^@scripts/(.*)$": "<rootDir>/core/scripts/$1",
    "^@sections/(.*)$": "<rootDir>/core/sections/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
