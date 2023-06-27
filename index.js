const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files')

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `this file name is hello${i}.txt`)
// }

fs.readdir(dirPath, (err, file)=>{
    file.forEach((item)=>{
        console.log(item)
    })
})      //Counting files for dirPath