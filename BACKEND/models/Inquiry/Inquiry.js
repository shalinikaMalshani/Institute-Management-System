const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const inquirySchema = new Schema({

    inquiry_id : {
        type : String,
        required: true
    },

    name : {
        type : String,
        required: true
    },

    grade: {
        type : Number,
        required: true
    },


    subjects:{
        type:String,
        required : true
    },

    email: {
        type:String,
        required : true
    },

    inqHeader: {
        type:String,
        required : true 
    },

    inqBody: {
        type:String,
        required : true 
    },

  
   inqimage: {
        type: String,
     required: true
   }

    //date : {
     //   type : Date,
     //   required : true,
     //   default : new Date()
    //}



})

const inquries = mongoose.model("Inquiry", inquirySchema);

module.exports = inquries;