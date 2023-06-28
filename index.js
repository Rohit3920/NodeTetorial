const express = require('express');
const App = express();

App.get("", (req, resp) => {

    resp.send(`
    <h1>Home page</h1>
    <p>this is a home page using <strong>Render</strong> HTML in node Js</p>
    <a href="/about" >Go to About</a>
    <a href="/data" >Show JSON data</a>
    `)
});

App.get("/about", (req, resp) => {

    resp.send(`
    <h1>About page</h1>
    <p>this is a about page in node Js</p>
    <a href="/" >Go to Home</a>
    `)
});

App.get("/data", (req, resp) => {

    resp.send([
        {
            name: 'Rohit',
            Gmail: 'rohit@gmail.com'
        },
        {
            name: 'Vedant',
            Gmail: 'vedant@gmail.com'
        }
    ])
});

App.listen(4622);



// Rendering HTML and JSON
