// CRUD operation with fs(file system)
// Make file 
// Create file
// Read file
// Update file
// Rename file
// Delete file

const fs = require('fs');
const path = require('path');

const input = process.argv;

const dirPath = path.join(__dirname, 'files');


if (input[2] == 'add') {

    // Create file
    fs.writeFileSync(`${dirPath}/Hello.txt`, 'Hello! I`m Web Developer ROHIT, NODE user');

} else if (input[2] == 'read') {

    // Read file
    fs.readFile(`${dirPath}/Hello.txt`, 'utf-8', (err, files) => (console.log(files)));

} else if (input[2] == 'update') {

    // Update file
    fs.appendFile(`${dirPath}/Hello.txt`, ' & I am learner for Web Developer', (e) => { if (!e) console.log('update successfully') });

} else if (input[2] == 'rename') {

    // Rename file name
    fs.rename(`${dirPath}/Hello.txt`, `${dirPath}/HelloUser.txt`, (e) => { if (!e) console.log('rename successfully') })

} else if (input[2] == 'delete') {

    // Delete file
    fs.unlinkSync(`${dirPath}/HelloUser.txt`, (e) => { if (!e) console.log('delete successfully') })

} else {
    console.log('Invalid Input');
}



//commands for CRUD operations 

// PS C:\Users\HP\Desktop\Node_teto> node index.js add
// PS C:\Users\HP\Desktop\Node_teto> node index.js read 
// Hello! I`m Web Developer ROHIT, NODE user
// PS C:\Users\HP\Desktop\Node_teto> node index.js update
// update successfully
// PS C:\Users\HP\Desktop\Node_teto> node index.js rename
// rename successfully
// PS C:\Users\HP\Desktop\Node_teto> node index.js delete


