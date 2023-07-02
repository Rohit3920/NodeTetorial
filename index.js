const express = require('express')
const reqFilter = require('./Middleware')

const app = express();



// app.use(reqFilter)

// Apple Middleware On single Route  ---> user, contact, login pages applied single route

app.get('/', (req, resp) => {
    resp.send("<h1>Hello! this is a HOME page</h1>")
})

app.get('/user',reqFilter, (req, resp) => {
    resp.send("<h1>Hello! this is a USER page</h1>")
})

app.get('/about', (req, resp) => {
    resp.send("<h1>Hello! this is a ABOUT page</h1>")
})

app.get('/contact', reqFilter, (req, resp) => {
    resp.send("<h1>Hello! this is a CONTACT page</h1>")
})

app.get('/login',reqFilter, (req, resp) => {
    resp.send("<h1>Hello! this is a LOGIN page</h1>")
})

app.listen(5000);