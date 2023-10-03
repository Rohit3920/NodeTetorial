const express = require('express');
const dbconnect = require("./mongodb");
const { magenta } = require('colors');
const mongodb = require('mongodb');

const app = express();

app.use(express.json())


// ----------------------------------Get mathod for Node js--------------------------------------------
app.get("/", async (req, resp) => {
    const data = await dbconnect();
    const result = await data.find().toArray();

    resp.send(result)
})

// ----------------------------------Post mathod for Node js--------------------------------------------
app.post("/", async (req, resp) => {
    const data = await dbconnect();
    const result = await data.insertOne(req.body)

    resp.send(result)
});


// ----------------------------------Put mathod for Node js--------------------------------------------
app.put("/:name", async (rewq, resp) => {
    const data = await dbconnect();
    const result = await data.updateOne(
        {name : req.param.name},
        {
            $set : {
                fees : false
            }
        }
    )

    resp.send({result : "update"})
})

// ----------------------------------Delete mathod for Node js--------------------------------------------

app.delete("/:id", async (req, resp) =>{
    const data = await dbconnect();
    const result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
// console.log(req.params.id + "Done")
    resp.send(result);
})

app.listen(5000);