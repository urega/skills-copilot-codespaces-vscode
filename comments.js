// Create web server

// Load the http module to create an http server.
var http = require("http");
var fs = require("fs");
var url = require("url");

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World\n");
  response.end();
});

// Listen on port 8000, IP defaults to
