// Script to log API requests and responses
const url = $request.url;
const method = $request.method;
const requestBody = $request.body;
const responseBody = $response.body;

console.log(`Request URL: ${url}`);
console.log(`Request Method: ${method}`);
console.log(`Request Body: ${requestBody}`);
console.log(`Response Body: ${responseBody}`);

$done({ body: responseBody });
