const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/',(req,res,next)=>{
    User.findByPk(req.email).then(result=>{
        res.status(200).json({message:"HI"+result.name});
    }).catch(err=>{  res.status(500).json({message:"something went wrong"}) })
});
module.exports=router;
