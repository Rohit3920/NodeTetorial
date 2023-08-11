// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('Products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();


const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/e-comm';
mongoose.connect(url)
    .then(() => console.log("connecting successfully"))
    .catch((err) => console.warn(err));


const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    fees: {
        type: Boolean,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

const Product = new mongoose.model("Products", ProductsSchema);


const readDoc = async () => {
    try {
        // const result = await Product.find({RollNo : {$eq : 5}})
        // const result = await Product.find({RollNo : {$gt : 5}})
        // const result = await Product.find({RollNo : {$gte : 5}})
        // const result = await Product.find({RollNo : {$lt : 5}})
        // const result = await Product.find({RollNo : {$lte : 5}})
        // const result = await Product.find({RollNo : {$ne : 10}})
        // const result = await Product.find({RollNo : {$in : [4, 6]}})
        const result = await Product.find({RollNo : {$nin :[4, 6]}})

        .select({_id: 0, name:1, Phone:1, RollNo:1})
        // .limit(1);
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

readDoc();


// nodemon have start >>cmd :  npm run serve