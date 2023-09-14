const dbConnect = require("./mongodb")

const insertData = async () => {
    const doc = await dbConnect();
    const result = await doc.insert({
        name : "swapnil",
        email : "swapnil@gmail.com",
        fees : true
    });
    if(result.acknowledged){
        console.log("Data inserted successfully")
    }else{
        console.log("Not send")
    }

}
insertData();