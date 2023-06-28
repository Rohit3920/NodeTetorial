const express = require('express');
const App = express();

App.get('', (req, resp) => {
    resp.send("<h1>Hello! this is Home page</h1>")
});

App.get('/about', (req, resp) => {
    resp.send("<h4>Hello! this is About page</h4>")
});

App.listen(4622);

// this is a library for Node Js
// using Express Js, save the time for coding