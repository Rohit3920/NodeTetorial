const dbConnect = require("./mongodb")

const updateOneData = async () => {
    const doc = await dbConnect();
    const result = await doc.updateOne({
        name : "swapnil"}, {$set : {fees : false}});
    if(result.acknowledged){
        console.log("Data Updated successfully")
    }else{
        console.log("Not updated")
    }
}
updateOneData();