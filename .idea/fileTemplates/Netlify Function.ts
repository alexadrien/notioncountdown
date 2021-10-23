import { Handler } from "@netlify/functions";

const FORBIDDEN_RESPONSE = {
  statusCode: 403,
  body: "Forbidden"
};

type APIResponse = {
  message: string,
};

const handler: Handler = async (event) => {
  if (!event.queryStringParameters) return FORBIDDEN_RESPONSE;

  const { password } = event.queryStringParameters;
  if (!password || password !== process.env.PASSWORD) return FORBIDDEN_RESPONSE;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, World!" } as APIResponse)
  };
};

export { handler };
