const express = require('express');
const path = require('path')

const App = express();

const pubPath = path.join(__dirname, 'Public')

// App.use(express.static(pubPath))

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

// Remove Extension from URL ---->
// Make 404 page & use it ---->
// http://localhost:4622   root page active i.e. index.html
// http://localhost:4622/abput
// http://localhost:4622/help
