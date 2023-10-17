const express = require("express");
require ("./config");
const product = require("./product");


const app = express();
app.use(express.json());

app.post("/create", async(req, resp) =>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(req.body);
})

app.get("/list", async (req, resp)=>{
    const data = await product.find();
    console.log(data);
    resp.send(data);
})

app.delete("/delete/:id", async (req, resp)=>{
    console.log(req.params);
const data = await product.deleteOne(req.params)
    resp.send(data);
});

app.put("/update/:id", async (req, resp)=>{
    let data = await product.updateOne(
        req.params,
        {
            $set : req.body
        }
    )
    console.log(req.params)
    resp.send(req.params)
})

app.listen(5000);
