// name ,usn,feedback 
const mongoose=require("mongoose");
const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String, 
        require:true,
        unique:true
    },
    message:{
        type:String,
        require:true
    }
   // timestamps:true
})

const msg=new mongoose.model('Feedback',feedbackSchema);

module.exports ={ msg }