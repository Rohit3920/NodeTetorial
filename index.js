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


const deleteDoc = async (_id) => {
    try {
        const delData = await Product.findByIdAndDelete({ _id })
        console.log(delData)
    } catch (error) {
        console.log(error.message)
    }
}
deleteDoc("64cf5d0637c8717026d0c31a")


// nodemon have start >>cmd :  npm run serve