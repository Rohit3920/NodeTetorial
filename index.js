const mongoose = require('mongoose');

const mongooseWithDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name : String,
        Phone : Number,
        fees : Boolean,
        RollNo : Number
    });
    const ProductModel = mongoose.model('products', ProductSchema)

    //----------------------------------Create Record-----------------------------------------------
    // let data = new ProductModel({
    //     name : "guru",
    //     Phone : 37972496,
    //     fees : true,
    //     RollNo : 13
    // });

    // let result = await data.save();
    // console.log(result)

    //----------------------------------Update Record-----------------------------------------------
    let data = await ProductModel.updateOne({name : 'guru'},
    {$set :{
        fees : false,
    }})
    console.log(data);


    //----------------------------------Delete Record-----------------------------------------------
    // let data = await ProductModel.deleteMany({
    //     price : 300,
    // })
    // console.log(data)

    //----------------------------------Read/Find Record-----------------------------------------------
    // let data = await ProductModel.find({name : 'parth'});
    // console.log(data)

}

mongooseWithDB();