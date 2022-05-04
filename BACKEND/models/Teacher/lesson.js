//need connect with db
const mongoose=require("mongoose");

//Inorder to store all the attributes related to student
 const Schema=mongoose.Schema;

//all the attributes.Here generate object id automatically.Like PK
const teacherLessonsSchema=new Schema({
    subject:{
        type:String,
        required:true
    },
    lessonNo:{
        type:String,
        required:true//act as backend validatio.It mean the name must have a value before insert to db
    },
    lessonNote:{
        type:String,
        required:true
    },
    tute:{
        type:String,
        required:true
        
    },
    stuTuteAnswers:{
        type:String,
        required:true
    },
    tuteAnswers :{
        type:String,
        
    },
    referances :{
        type:String,
        required:true
    }
    
});

const Lesson=mongoose.model("Lesson",teacherLessonsSchema);

//export the module.If ignore this cannot use this model inside route.
module.exports=Lesson;