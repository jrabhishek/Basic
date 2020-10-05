const jwt = require('jsonwebtoken');
const Session = require('../models/Sessions');
module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "key", {expiresIn: "2 days"});
        const timeStamp = Math.floor(Date.now()/1000);
        if((timeStamp-decoded.exp)>=0){
            res.status(401).json({message:"token expired"});
        }
        else{
            Session.findAll({where:{email:decoded.email,token:token}}).then((result)=>{
                if(result.length===0){
                    console.log(result)
                    res.status(401).json({message:"token expired"});
                }
                else{
                    console.log(result)
                    req.email=decoded.email;
                    req.token = token;
                    next();
                }
            }).catch(err=>{res.status(500).json({message:"something went wrong"})})

        }



    }catch (err){
        res.status(401).json({message:"not authorized"});
    }


}
