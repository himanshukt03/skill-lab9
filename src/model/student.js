const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    USN: {
        type : String
    },
    email : {
        type : String
    },
    mobile : {
        type : Number
    },
    // timestapms : true
})

const stu = new mongoose.model('Student', studentSchema);

module.exports = { stu }
