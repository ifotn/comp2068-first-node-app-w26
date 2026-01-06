"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http lib that installs w/node
const http_1 = __importDefault(require("http"));
// start local web server and listen for http requests
http_1.default.createServer((req, res) => {
    // set basic http response to each request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Node.js</h1>');
    res.end();
}).listen(4000);
console.log('Web server running on port 4000');
