const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){

 const token = req.headers.authorization;

 if(!token) return res.status(401).json("Access denied");

 try{

  const verified = jwt.verify(token,"SECRETKEY");

  req.user = verified;

  next();

 }catch{

  res.status(400).json("Invalid token");

 }

}

module.exports = authMiddleware;