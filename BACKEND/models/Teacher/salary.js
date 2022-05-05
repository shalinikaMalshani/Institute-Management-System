//need connect with db
const mongoose=require("mongoose");

//Inorder to store all the attributes related to student
 const Schema=mongoose.Schema;

//all the attributes.Here generate object id automatically.Like PK
const teacherSalarySchema=new Schema({
    name:{
        type:String,
        required:true//act as backend validatio.It mean the name must have a value before insert to db
    },
    month:{
        type:String,
        required:true
    },
    basic:{
        type:Number,
        required:true
    },
    da:{
        type:Number,
        required:true
    },
    ta :{
        type:Number,
        required:true
    },
    ma :{
        type:Number,
        required:true
    },
    pf :{
        type:Number,
        required:true
    },
    gross :{
        type:Number,
        required:true
    },
    net :{
        type:Number,
        required:true
    }
});

const Salary=mongoose.model("Salary",teacherSalarySchema);

//export the module.If ignore this cannot use this model inside route.
module.exports=Salary;