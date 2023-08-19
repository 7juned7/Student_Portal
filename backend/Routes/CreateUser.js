const express = require('express')
const router = express.Router()


const User = require("../models/User");

const jwt = require("jsonwebtoken");
const jwtSecret  = "ThisIsSecret#@!"

router.post("/createuser",async(req,res)=>{
    try{
        username = req.body.username
        const userExist = await User.exists({ username});
        if(userExist){
            return res.json({success:false})
        }
        else{

            await User.create({
                username:req.body.username,
                password:req.body.password
            })
            res.json({success:true});
        }
    }catch(error){
        console.log("err")
        res.json({success:false})
    }
})

router.post("/loginuser",
async(req,res)=>{
 let username = req.body.username; 

    try{
       let userData =  await User.findOne({username});
       
       if(!userData){
        return res.status(400).json({errors:"try correct credentials"})
       }

       if(req.body.password !== userData.password){
        return res.status(400).json({errors:"try-correct credentials"})
       }
     
       

        const data = {
            user:{ 
                id: userData._id

            }
        }
        const authToken = jwt.sign(data,jwtSecret)
       return res.json({success:true,authToken:authToken});

    }catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router;