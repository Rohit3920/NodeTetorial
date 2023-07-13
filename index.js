const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Products');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

// getData().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// });

const main = async () =>{
    let data = await getData();
    data = await data.find().toArray();
    console.log(data)
}

main();