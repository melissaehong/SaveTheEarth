const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = "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";

const openai = new OpenAI(OPENAI_API_KEY);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World' + JSON.stringify(openai));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
