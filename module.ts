import { SQSClient } from "@aws-sdk/client-sqs";

const sqs = new SQSClient();

export const main = async () => {
  return await sqs.send({} as any);
};
