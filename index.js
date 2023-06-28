const express = require('express');
const App = express();

App.get("", (req, resp) => {
    console.log('data send by browser ==>>', req.query.name)
    resp.send(`<h1>Hello! this is Home page : ${req.query.name}</h1>`)
});

App.listen(4622);



//cmd : node index.js
//URL change : localhost:4622/?name=rohit
