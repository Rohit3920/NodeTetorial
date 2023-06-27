const fs = require('fs')
const input = process.argv;

if (input[2] == 'add'){
    fs.writeFileSync(input[3], input[4])    //Create file using Input from command line
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])         //Delete file using Input from command line
}else{
    console.log('Invalid Input')
}




// const fs = require('fs')
// const input = process.argv;

// fs.writeFileSync('simple.txt', `my name is :- ${input[2]}`)