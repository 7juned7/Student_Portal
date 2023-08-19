const mongoose = require('mongoose');

const {Schema} = mongoose;

const StudentNoSchema = new Schema({
   username:{
    type:String,
    required:true
   },
    studentname:{
        type: String,
        required:true
    },
    rollno:{
        type: String,
        required:true
    },
    midsemno:{
        type: String
    },
    endsemno:{
        type:String
    },
    practicalno:{
        type:String
    }

})

module.exports = mongoose.model('StudentMarksData',StudentNoSchema);