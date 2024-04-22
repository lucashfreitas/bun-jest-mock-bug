import { main } from "../module";

jest.mock("@aws-sdk/client-sqs", () => ({
  SQSClient: jest.fn().mockImplementation(() => {
    return {
      send: jest.fn().mockImplementation(() => "s"),
    };
  }),
}));

test("it doesn't work when I am using the mocked module in another file", async () => {
  const mains = await main();
  expect(mains).toBe("s");
});
