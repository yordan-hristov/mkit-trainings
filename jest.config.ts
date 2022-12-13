import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-node-single-context',
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
