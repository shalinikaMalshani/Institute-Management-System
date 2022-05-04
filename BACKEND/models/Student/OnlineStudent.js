const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const onlineStudentSchema = new Schema({

    stuName:{
        type : String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthDay:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    stream: {
        type: Array,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    admissionFees: {
        type: Number,
        required: true
    },
    rdate: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    paymentSlip: {
        type: String,
        required: true
    },
  

})

const OnlineStudent= mongoose.model("OnlineStudent",onlineStudentSchema);

module.exports = OnlineStudent; 