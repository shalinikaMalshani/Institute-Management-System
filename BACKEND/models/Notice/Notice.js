const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const noticeSchema = new Schema({

    notice_id : {
        type : String,
        required: true
    },

    header: {
        type : String,
        required: true
    },


    description:{
        type:String,
        required : true
    },

  
   noticeImage: {
        type: String,
       required: true
    },

    //date : {
     //   type : Date,
     //   required : true,
     //   default : new Date()
    //}



})

const notices = mongoose.model("Notice", noticeSchema);

module.exports = notices;