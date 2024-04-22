// NOTE: this file is centrally controlled via Terraform. Local changes risk being overwritten by IaC
// updates. If you need actions specific to this repository alone, consider whether they can be
// achieved by a separate workflow, or (worst case) whether we need to create an exception.
//
// https://github.com/spidertracks/npm-publisher.terraform/blob/master/template/jest.config.js
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.jest.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
