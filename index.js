const express = require("express")
const connMySQL = require("./configMySQL")

const app = express();
app.use(express.json())

app.get("/", (req, resp) => {
    connMySQL.query("select * from products", (err, result) => {
        var data = err ? err : result;
        console.log(data);
        resp.send(data);
    })
})

app.post("/upload", (req, resp) => {
    //...............................Static Data.................................
    // const insert = {
    //     name: "Rohan",
    //     country: "INDAIN",
    // }

    //...............................Pass Data using POSTMAN.................................
    const insert = req.body;


    connMySQL.query("INSERT INTO products SET ?", insert, (err, resl, feilds) => {
        if (err) throw err
        resp.send(resl);
    })
});

app.put("/update", (req, resp) => {
    //...........................Static date send............................
    // const updateData = ["Rohit", "Bharat", 12]

    //....................................Postmon through...................
    const updateData = [
        req.body.name,
        req.body.country,
        req.body.id

    ]

    connMySQL.query("UPDATE users SET name =?, country = ? where id = ?", updateData, (err, resl, feilds) => {
        const result = err ? "error" : resl;
        resp.send(result);
    })
})
app.listen(5400);