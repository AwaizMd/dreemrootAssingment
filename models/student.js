
const mongoose = require('mongoose');

const Student = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    class: {
        type: String
    },
    schoolName:{
        type: String
    },
    fatherName:{
        type: String
    },
    phoneNumber:{
        type: String
    }
    
}));

exports.Student = Student;