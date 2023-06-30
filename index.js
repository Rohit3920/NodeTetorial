const express = require('express');
const path = require('path')

const App = express();

const pubPath = path.join(__dirname, 'Public')

App.set('view engine', 'ejs')                           // ejs set in app

App.get('/profile', (_, resp)=>{                         //then use dynamically
    const user= {
        name: 'Rohit Nittawadekar',
        email: "rohitnittawadekar07@gmail.com",
        prof: "Web Developer- NODE user"
    }
resp.render('profile', {user})
})

App.get('', (_, resp)=>{
    resp.sendFile(`${pubPath}/index.html`)
})

App.get('/about', (_, resp)=>{
    resp.sendFile(`${pubPath}/about.html`)
})

App.get('/help', (_, resp)=>{
    resp.sendFile(`${pubPath}/help.html`)
})

App.get('*', (_, resp)=>{
    resp.sendFile(`${pubPath}/p404.html`)
})


App.listen(4622);

// Install ejs (engine) templete package ---->
// setup dynamic routing ---->
// Male a dynamic page ---->



// Install ejs package cmd == npm i ejs 
// set in App 
// then use 