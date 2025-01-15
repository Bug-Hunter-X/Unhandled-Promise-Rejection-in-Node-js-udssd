const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

//Unhandled promise rejection.  It is important to handle this error to prevent unexpected behavior.
//This can be resolved with try-catch blocks and/or .catch() blocks
//Example solution in solutionContent