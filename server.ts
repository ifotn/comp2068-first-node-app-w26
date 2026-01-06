// import http lib that installs w/node
import http from 'http';

// start local web server and listen for http requests
http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // set basic http response to each request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Node.js</h1>');
    res.end();
}).listen(4000);

console.log('Web server running on port 4000');