// install npm-multer package
// create uploads folder in project directory
// ser single or multiple file upload (line:20), and set file name (user_file);
// open postmon and select post method and choose from-data > set Name (user_file) > select "file"> choose file And SEND; 



const express = require("express")
const multer = require("multer")

const app = express();

const uploadFile =  multer({
    storage : multer.diskStorage({
        destination : (req, file, cd)=>{
            cd(null, "uploads")
        },
        filename : (req, file,cd)=>{
            cd(null, file.fieldname+"-"+Date.now()+'.jpg')
        }
    })
}).single("user_file");

app.post("/upload", uploadFile, (req, resp)=>{
    resp.send("File upload....")
})

app.listen(5400)