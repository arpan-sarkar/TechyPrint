const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
 name:String,
 price:Number,
 category:String,
 description:String,
 images:[String],
 sizes:[String],
 colors:[String],
 rating:Number
});

module.exports = mongoose.model("Product", ProductSchema);