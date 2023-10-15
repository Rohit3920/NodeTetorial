const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : String,
    fees : Boolean,
    Phone : Number,
    RollNO : Number
});

module.exports = mongoose.model("products", productSchema);
