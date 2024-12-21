const jwt=require('jsonwebtoken');
require('dotenv').config();

module.exports =function(req,res,next){
    const token=req.header("Authorization")?.split(" ")[1];

    if(!token){
        return res.status(401).json({error:'Access denied'});
    };

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.admin=decoded;
        next();
    } catch (error) {
        res.status(401).json({message:'Invalid token'});
        console.error(error.message);
    }
}