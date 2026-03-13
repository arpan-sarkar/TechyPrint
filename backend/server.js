const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/products", productRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/techyprint")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.listen(5000,()=>{
  console.log("Server running on port 5000");
});