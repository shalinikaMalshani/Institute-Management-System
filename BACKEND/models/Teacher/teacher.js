//need connect with db
const mongoose=require("mongoose");

//Inorder to store all the attributes related to student
 const Schema=mongoose.Schema;

//all the attributes.Here generate object id automatically.Like PK
const teacherSchema=new Schema({
    name:{
        type:String,
        required:true//act as backend validatio.It mean the name must have a value before insert to db
    },
    photo:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    qualification :{
        type:String,
        required:true
    },
    mobile :{
        type:String,
        required:true
    },
    subject :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
    rType:{
        type:String,
        required:true
    },
    password:{
        type:String

    },
    confirmPassword:{
        type:String
    }

});

const Teacher=mongoose.model("Teacher",teacherSchema);

//export the module.If ignore this cannot use this model inside route.
module.exports=Teacher;