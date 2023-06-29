const express = require('express');
const path = require('path')

const App = express();

const pubPath = path.join(__dirname, 'Public')

App.use(express.static(pubPath))


App.listen(4622);

// Make folder for HTML files and access it ---->
// http://localhost:4622   root page active i.e. index.html
// http://localhost:4622/abput.html
// http://localhost:4622/help.html
