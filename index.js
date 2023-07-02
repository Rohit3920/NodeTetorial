const express = require('express')
const reqFilter = require('./Middleware')
const route = express.Router();

const app = express();

route.use(reqFilter)

app.get('/', (req, resp) => {
    resp.send("<h1>Hello! this is a HOME page</h1>")
})

route.get('/user', (req, resp) => {
    resp.send("<h1>Hello! this is a USER page</h1>")
})

app.get('/about', (req, resp) => {
    resp.send("<h1>Hello! this is a ABOUT page</h1>")
})

route.get('/contact', (req, resp) => {
    resp.send("<h1>Hello! this is a CONTACT page</h1>")
})

route.get('/login', (req, resp) => {
    resp.send("<h1>Hello! this is a LOGIN page</h1>")
})

app.use('/', route)

app.listen(5000);