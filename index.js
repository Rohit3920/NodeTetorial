const express = require('express')

const app = express();

const reqFilter = (req, resp, next)=>{
  if(!req.query.age){
    resp.send("Please valid age")
  }else if(req.query.age < 18){
    resp.send("You can not access the page")
  }else{
    next();
  }
}

app.use(reqFilter)

app.get('/', (req, resp)=>{
resp.send("<h1>Hello! this is a HOME page</h1>")
})

app.get('/user', (req, resp)=>{
    resp.send("<h1>Hello! this is a USER page</h1>")
    })

    app.listen(5000);