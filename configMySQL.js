


const mysql = require("mysql")

const connMySQL = mysql.createConnection({                   //connect MySQL in localhost
    host : "localhost",
    user : 'root',
    password : "",
    database : 'e-comm'
})

connMySQL.connect((e)=>{                       // check MySQL database connect or not
    var data = e? e:"connected"
    console.log(data)
})

module.exports = connMySQL;
