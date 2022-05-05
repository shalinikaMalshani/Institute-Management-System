//need connect with db
const mongoose=require("mongoose");

//Inorder to store all the attributes related to student
 const Schema=mongoose.Schema;

//all the attributes.Here generate object id automatically.Like PK
const teacherLeaveSchema=new Schema({
    name:{
        type:String,
        required:true//act as backend validatio.It mean the name must have a value before insert to db
    },
    type:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        
    },
    fDate:{
        type:String,
        
    },
    tDate :{
        type:String,
        
    },
    reason :{
        type:String,
        required:true
    }
    
});

const Leave=mongoose.model("Leave",teacherLeaveSchema);

//export the module.If ignore this cannot use this model inside route.
module.exports=Leave;