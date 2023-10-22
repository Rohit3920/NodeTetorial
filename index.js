const express = require("express");
const eventEmitter = require("events")
require ("./config");
const product = require("./product");
const app = express();

const Event = new eventEmitter();

let count = 0;

Event.on("countAPI", (req, resp)=>{
    count++;
    console.log("Event called", count);
})

app.get("/", (req, resp)=>{
    resp.send(`API called `);
    Event.emit(`countAPI`);
})

app.listen(5400);
