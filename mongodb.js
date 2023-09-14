const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/e-comm';
const database = 'e-comm';
const client = new MongoClient(url);

module.exports = dbConnect =async () => {
    let result = await client.connect();
    let db = await result.db(database);
    return db.collection('products')
}

