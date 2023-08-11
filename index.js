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
        const result = await Product.find({fees : false})
        .select({_id: 0, name:1, Phone:1})
        .limit(1);
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

readDoc();

// const createProducts = async () =>{
//     try{
//         const newProduct1 = new Product({
//             name : 'pruthvi',
//             Phone : 15646416,
//             fees : true
//         });
//         const newProduct2 = new Product({
//             name : 'samarjeet',
//             Phone : 986448565,
//             fees : false
//         });
//         const newProduct3 = new Product({
//             name : 'pratik',
//             Phone : 45148816,
//             fees : true
//         })

//         const productData = await Product.insertMany([newProduct1, newProduct2, newProduct3]);
//         console.log(productData)
//     }catch(error){
//         console.log(error.message);
//     }
// }

// createProducts();







// nodemon have start >>cmd :  npm run serve