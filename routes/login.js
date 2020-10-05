const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const Session = require('../models/Sessions');
const createToken = require('../util/createToken');


router.use((req,res,next)=>{
    const email = req.body.email;
    const password  = req.body.password;
    if(email==null||password==null){
        res.status(400).json({
            message:"one or more field is empty"
        });
    }
    else{
        User.findByPk(email).then((result)=>{
            if(result==null){
                res.status(404).json({message:"user not register"});
            }
            else{
                bcrypt.compare(password+email,result.password,(err,result)=>{
                    if(result===true){
                        next();
                    }
                    else{
                        res.status(401).json({message:"Authentication failed"});
                    }
                })
            }

        }).catch((err)=>{res.status(500).json({message:"somethingwent wrong"})});
    }
})




router.post("/",(req,res,next)=>{
    const token = createToken(req.body.email);
    Session.findAll({where:{email:req.body.email}}).then((result)=>{
        if(result.length>2){
            console.log(result.length)
            for(let i=0; i<result.length;i++){
                result[i].destroy().then(()=>{console.log(i+"  deleted")}).catch((err)=>{ res.status(500).json({message:"something went wrong"})});
            }
        }

        Session.create({
            email:req.body.email,
            token:token
        }).then(()=>{
            res.status(200).json({message:"login success",token:token});
        }).catch((error)=>{
            res.status(500).json({
                message:"something went wrong"
            });
        })

    }).catch((err)=>{res.status(500).json({"meaage":err})});


});
module.exports = router;

