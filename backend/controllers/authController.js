const jwt = require("jsonwebtoken");

exports.adminLogin = (req,res)=>{

const {email,password} = req.body;

if(email==="admin@techyprint.com" && password==="123456"){

const token = jwt.sign(
{role:"admin"},
"secretkey",
{expiresIn:"1d"}
);

res.json({token});

}else{

res.status(401).json({message:"Invalid credentials"});

}

};