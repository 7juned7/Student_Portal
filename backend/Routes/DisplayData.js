const express = require('express')
const router = express.Router()


router.post('/studentData',(req,res)=>{
    try{
        res.send([global.userData,global.studentMarksData])
    }catch(error){
        console.log("error in sending data to front-end")
    }
})



module.exports = router;