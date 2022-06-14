const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    qty:String,
    price:String,
    category:String,
   
})

module.exports = mongoose.model("products", productSchema);