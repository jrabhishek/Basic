const express = require('express');
const router = express.Router();
const Session = require('../models/Sessions');

router.get('/',(req,res,next)=>{
    const email = req.email;
    const token = req.token;
    Session.findAll({where:{email:email,token:token}}).then(result=>{
        result[0].destroy().then(result=>{res.status(200).json({message:"successfully logout"});
        }).catch(err=>{res.status(500).json({message:"something went wrong"})})
    }).catch(err=>{res.status(500).json({message:"something went wrong"})})


});
module.exports=router;
