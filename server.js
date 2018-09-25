var server = require('http');
function runServer(require,response){
  console.log("Someone is connected!");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("<h1>Server Running</h1>");
  response.end();
}

server.createServer(runServer).listen(8888);