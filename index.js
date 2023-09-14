const dbConnect = require("./mongodb")

const updateManyData = async () => {
    const doc = await dbConnect();
    const result = await doc.updateMany({
        name : "swapnil"}, {$set : {fees : false}});
    if(result.acknowledged){
        console.log("Many Data Updated successfully")
    }else{
        console.log("Not updated")
    }
}
updateManyData();