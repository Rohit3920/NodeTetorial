const http = require('http')

http.createServer((req, resp)=>{
    resp.writeHead(200, {'content-type' : 'application/json'});
    resp.write(JSON.stringify('Web Developer ROHIT, NODE User'));
    resp.end();
}).listen(4500);


// Create package.json file using node.js

    // using command line
        // >npm init
        // package name: (node_teto) node-tetorial
        // version: (1.0.0)
        // description: practise for Creating package.json file
        // entry point: (index.js)
        // test command:
        // git repository: https://github.com/Rohit3920/NodeTetorial
        // keywords: step by step code
        // author: Rohit Nittawadekar
        // license: (ISC)

    // Install packages 
        // > npm i colors
            //install some packages to create packafe-lock.json file and node module folder
            //you don't push node mosule folder in repo
            //this folder hava ignore in git 