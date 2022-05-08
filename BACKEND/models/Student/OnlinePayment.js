const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const onlinePaymentSchema = new Schema({

    stuName:{
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    stream: {
        type: Array,
        required: true
    },
    rdate: {
        type: String,
        required: true
    },
    subject1: {
        type: Array,
        
    },
    subject2:{
        type: Array
    },
    subject3: {
        type: Array,
        
    },
    subject4: {
        type: Array,
       
    },
    // subject5: {
    //     type: Array
    // },
    // subject6: {
    //     type: Array
    // },
    teacher: {
        type: Array,
      
    },
    teacher2: {
        type: Array
        
    },
    teacher3: {
        type: Array
       
    },
    teacher4: {
        type: Array
    },
    // teacher5: {
    //     type: Array
    // },
    // teacher6: {
    //     type: Array
    // },
    
    fees1:{
        type:Number,
       

    },
    fees2:{
        type:Number

    },
    fees3:{
        type:Number

    },
    fees4:{
        type:Number
    

    },
    // fees5:{
    //     type:Number
        

    // },
    // fees6:{
    //     type:Number
       

    // },
    total:{
        type:Number,
        // required:true

    },
    amount:{
        type:Number,
        required:true
    },
    paymentSlip:{
        type:String,
        // required:true
    }





})

const OnlinePayment = mongoose.model("OnlinePayment",onlinePaymentSchema);

module.exports = OnlinePayment; 