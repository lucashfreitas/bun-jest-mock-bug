import { SQSClient } from "@aws-sdk/client-sqs";
const sqs = new SQSClient();

jest.mock("@aws-sdk/client-sqs", () => ({
  SQSClient: jest.fn().mockImplementation(() => {
    return {
      send: jest.fn().mockImplementation(() => "s"),
    };
  }),
}));

test("it works when I am importing the module in the test file", async () => {
  const result = await sqs.send({} as any);
  expect(result).toBe("s" as any);
});
