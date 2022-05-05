//need connect with db
const mongoose=require("mongoose");

//Inorder to store all the attributes related to student
 const Schema=mongoose.Schema;

//all the attributes.Here generate object id automatically.Like PK
const teacherMeetingSchema=new Schema({
    topic:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true//act as backend validatio.It mean the name must have a value before insert to db
    },
    time:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
        
    },
    mId:{
        type:String,
        required:true
    },
    passCode:{
        type:String,
        required:true
    }
    
    
});

const Meeting=mongoose.model("Meeting",teacherMeetingSchema);

//export the module.If ignore this cannot use this model inside route.
module.exports=Meeting;