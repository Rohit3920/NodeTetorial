const express = require('express');
const path = require('path')

const App = express();

const pubPath = path.join( __dirname, 'Public')

App.use(express.static(pubPath))


App.listen(4622);
