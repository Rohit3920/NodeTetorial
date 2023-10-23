const express = require("express")
const connMySQL = require("./configMySQL")

const app = express();

app.get("/", (req, resp) => {
    connMySQL.query("select * from products", (err, result) => {
       var data = err ? err : result
        console.log(data)
        resp.send(data)
    })
})

app.listen(5400);