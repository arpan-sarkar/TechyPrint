const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
 userId:String,
 productId:String,
 rating:Number,
 comment:String
});

module.exports = mongoose.model("Review", ReviewSchema);