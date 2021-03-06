import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as JSONWebKey from 'json-web-key';

const jwks = async (
  _: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      keys: [
        {
          alg: 'RS256',
          kid: process.env['KEY_ID'],
          ...JSONWebKey.fromPEM(process.env['PUBLIC_KEY']).toJSON(),
        },
      ],
    }),
  };
};

export { jwks };
