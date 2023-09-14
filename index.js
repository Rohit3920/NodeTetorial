const dbConnect = require("./mongodb")

const DeleteData = async () => {
    const doc = await dbConnect();
    const result = await doc.deleteOne({
        name : "swapnil"});
    if(result.acknowledged){
        console.log("One Data Deleted successfully")
    }else{
        console.log("Not Deleted")
    }
}
DeleteData();