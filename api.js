const express = require('express');
const dbconnect = require("./mongodb")

const app = express();

app.get("/" , async(req, resp)=>{
    const data = await dbconnect();
    const result = await data.find().toArray();

    resp.send(result)
})

app.listen(5000);