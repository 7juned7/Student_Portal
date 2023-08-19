const mongoose = require('mongoose')
const mongoURI = "mongodb://7juned7:portal213@ac-djrmcrk-shard-00-00.ltqpv1z.mongodb.net:27017,ac-djrmcrk-shard-00-01.ltqpv1z.mongodb.net:27017,ac-djrmcrk-shard-00-02.ltqpv1z.mongodb.net:27017/portal?ssl=true&replicaSet=atlas-j3fzjf-shard-0&authSource=admin&retryWrites=true&w=majority"


const mongoDB = async() => {
try{
   await mongoose.connect(mongoURI);
   console.log("connected")
   let fetched_data = mongoose.connection.db.collection("users");
    let userData = await fetched_data.find({}).toArray()
    try{
        global.userData = userData;
        
        let fetchedStudentData = mongoose.connection.db.collection("studentmarksdatas")
        
        
        let studentMarksDatas = await fetchedStudentData.find({}) .toArray();
        global.studentMarksData =studentMarksDatas;
        
      
    }catch(error){
        console.log("error in getting data")
    }
}catch(error){
    console.log("error")
}

}


module.exports = mongoDB;