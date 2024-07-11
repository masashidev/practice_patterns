// typical web server

var http = require('http');
var fs = require('fs');

const port = 3000;
const responseMessage = '<h1>Hello, World!</h1>';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end(responseMessage);
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

