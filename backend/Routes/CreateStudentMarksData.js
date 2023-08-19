const express = require('express');
const { db } = require('../models/StudentMarks');
const router = express.Router()


const StudentMarksData = require("../models/StudentMarks");


router.post("/createStudentMarksData",async(req,res)=>{

    try{  
        const username = req.body.username
        const rollno = req.body.rollno
        const Exist = await StudentMarksData.exists({ username,rollno})

        if(Exist){
            return res.json({success:false})
        }
        else{

            await StudentMarksData.create({
    
                username:req.body.username,
                studentname:req.body.studentname,
                rollno:req.body.rollno,
                midsemno:req.body.midsemno,
                endsemno:req.body.endsemno,
                practicalno:req.body.practicalno
            })
            res.json({success:true});
        }
    }catch(error){
        console.log("err")
        res.json({success:false})
    }
})

router.post("/updateStudentMarksData",async(req,res)=>{
    let id = req.body._id
    try{
        

            await StudentMarksData.findByIdAndUpdate(id,{
                studentname:req.body.studentname,
             
                midsemno:req.body.midsemno,
                endsemno:req.body.endsemno,
                practicalno:req.body.practicalno
            })
    
           
            res.json({success:true});
        
        
        
    }catch(error){
        console.log("err")
        res.json({success:false})
    }
})

router.post("/deleteStudentMarksData",async(req,res)=>{
    let id = req.body._id
    try{
         

        await StudentMarksData.findByIdAndDelete(id,{
            _id:req.body.id,
            studentname:req.body.studentname,
            rollno:req.body.rollno,
            midsemno:req.body.midsemno,
            endsemno:req.body.endsemno,
            practicalno:req.body.practicalno
        })

       
        res.json({success:true});
    }catch(error){
        console.log("err")
        res.json({success:false})
    }
})

module.exports = router;