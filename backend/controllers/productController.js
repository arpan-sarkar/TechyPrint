const Product = require("../models/Product");

exports.getProducts = async (req,res)=>{
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req,res)=>{

  const {name,price,description} = req.body;

  const image = req.file ? req.file.filename : "";

  const product = new Product({
    name,
    price,
    description,
    image
  });

  await product.save();

  res.json(product);
};
exports.deleteProduct = async (req,res)=>{

  try{

    await Product.findByIdAndDelete(req.params.id);

    res.json({message:"Product Deleted"});

  }catch(error){

    res.status(500).json({message:error.message});

  }

};

exports.updateProduct = async (req,res)=>{

  try{

    const updateData = {
      name:req.body.name,
      price:req.body.price,
      description:req.body.description
    };

    if(req.file){
      updateData.image = req.file.filename;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { returnDocument: "after" }
    );

    res.json(product);

  }catch(error){

    res.status(500).json({message:error.message});

  }

};