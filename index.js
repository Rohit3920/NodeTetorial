const express = require("express");
require ("./config");
const product = require("./product");


const app = express();
app.use(express.json());

app.get("/search/:key", async(req, resp)=>{
    console.log(req.params.key);
    // let data = await product.find();
    let data = await product.find({
        "$or":[
            {"name": {$regex : req.params.key}},
            //only work in String type of data;
        ]
    });

    resp.send(data);
})

app.listen(5400);
