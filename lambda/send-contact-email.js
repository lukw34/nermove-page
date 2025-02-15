const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');


const parseInput = (input) => {
  if(input === null) {
    throw new Error('Missing request body');
  }
  const REQUIRED_INPUTS = ['subject', 'message'];
  for (let i = 0; i < REQUIRED_INPUTS.length; i++) {
    if (!input[REQUIRED_INPUTS[i]]) {
      throw new Error('Missing field');
    }}
  if (input.subject.length < 4 || input.subject.length > 100 || input.message.length < 10 || input.message.length > 1000) {
    throw new Error('Incorrect fields size');
  }
  return input;
};	


exports.send = async (event) => {
  try {
    const requestBody = parseInput(JSON.parse(event.body));
    const snsClient = new SNSClient({});
    const subject = requestBody.subject;
    const message = requestBody.message;

    const snsParams = {Subject: subject, Message: `${message}`, TopicArn: process.env.TOPIC_ARN };

    console.log(JSON.stringify(snsParams));
    await snsClient.send(
      new PublishCommand(snsParams),
    );
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Message successfuly send' }),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Error while sending a message' }),
    };
  }
};