import { expect, test, mock, jest } from "bun:test";

import { main } from "../module";

mock.module("@aws-sdk/client-sqs", () => ({
  SQSClient: jest.fn().mockImplementation(() => {
    return {
      send: jest.fn().mockImplementation(() => "s"),
    };
  }),
}));

/**
 * Bun is not mocking the module when it is used in another file.
 */
test("it doesn't work when I am using the mocked module in another file", async () => {
  const mains = await main();
  expect(mains).toBe("s");
});
