const express = require('express');
const App = express();

App.get("", (req, resp) => {
    console.log('data send by browser ==>>', req.query.name)
    resp.send(`<h1>Hello! this is Home page : ${req.query.name}</h1>`)
});

App.listen(4622);

// this is a library for Node Js
// using Express Js, save the time for coding