import { expect, test, mock, jest } from "bun:test";

import { SQSClient } from "@aws-sdk/client-sqs";

const sqs = new SQSClient();

export const main = async () => {
  return await sqs.send({} as any);
};

mock.module("@aws-sdk/client-sqs", () => ({
  SQSClient: jest.fn().mockImplementation(() => {
    return {
      send: jest.fn().mockImplementation(() => "s"),
    };
  }),
}));

test("it doesn't work when I am mocking the nodejs-module into a file", async () => {
  const mains = await main();
  expect(mains).toBe("s" as any);
});
