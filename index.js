const http = require('http')

http.createServer((req, resp)=>{
    resp.writeHead(200, {'content-type' : 'application/json'});
    resp.write(JSON.stringify('Web Developer ROHIT, NODE User'));
    resp.end();
}).listen(4500);