const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const user={
    name:"",
    email:"",
    password:""
};

router.use((req,res,next)=>{
    user.name = req.body.name;
    user.email = req.body.email;
    user.password  = req.body.password;
    if(user.name==null||user.email==null||user.password==null){
        res.status(400).json({
            message:"one or more field is empty"
        });
    }
    User.findByPk(user.email).then((result)=>{
        if(result==null)
            next();
        else
            res.status(400).json({message:"email already exit"})
    })

})

router.post('/',(req,res,next)=>{
    bcrypt.hash(user.password+user.email, saltRounds, function(err, hash) {
        if(!err){
        User.create({
            name:user.name,
            email:user.email,
            password:hash
        }).then(()=>{
            res.status(200).json({
                message:"registration successful"
            });
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({
                message:err.name
            });
        })
        }
        else{
            res.status(500).json({message:"something went wrong"})
        }

    });


});
module.exports = router;
