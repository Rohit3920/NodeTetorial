const http = require('http');
const data = require('./data')

http.createServer((req, resp)=>{
    resp.writeHead(200, {'content-type': 'application/json'});
    resp.write(JSON.stringify(data.name));
    resp.end();
}).listen(5000);