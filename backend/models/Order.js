const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
 userId:String,
 products:Array,
 totalPrice:Number,
 address:String,
 status:{
  type:String,
  default:"Processing"
 }
});

module.exports = mongoose.model("Order", OrderSchema);