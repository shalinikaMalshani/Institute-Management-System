const router=require("express").Router();

const e = require("express");

//need the model
let Lesson=require("../../models/Teacher/lesson");

//create teacher
router.route("/addLesson").post((req,res)=>{ //http:...../student/add

    //create variable to store attributes
    const subject=req.body.subject;
    const lessonNo=req.body.lessonNo;
    const lessonNote=req.body.lessonNote;
    const tute=req.body.tute;
    const stuTuteAnswers=req.body.stuTuteAnswers;
    const tuteAnswers=req.body.tuteAnswers;
    const referances=req.body.referances;
    
    //initilaize the above atributes
    const newTeacherLesson=new Lesson({
        subject,
        lessonNo,
        lessonNote,
        tute,
        stuTuteAnswers,
        tuteAnswers,
        referances});

    //.then->If success do this.javascript promise
    newTeacherLesson.save().then(()=>{
        return res.status(200).json({
                         success:"Teacher Lesson Added Successfully!"
                     }); //send the message to frntend vis json reaponse format
    }).catch((err)=>{
        return res.status(400).json({
            status:"Error with save data",error:err.message
        });
    })
})

//read teacher
router.route("/AllLessons").get((req,res)=>{
Lesson.find().exec((err,teachers)=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingLessons:teachers
    })

})
})


    


//update
//async method.Here can handle muliple requests without crashing
router.route("/updateLesson/:id").put(async(req,res)=>{
    //store userid
    let userId=req.params.id;//get the id that coming from parameter
    
    //get all the updated details.destrcher method
    const {subject,lessonNo,lessonNote,tute,stuTuteAnswers,tuteAnswers,referances}=req.body;
    
    const updateTeacher={
        subject,
        lessonNo,
        lessonNote,
        tute,
        stuTuteAnswers,
        tuteAnswers,
        referances
    }
    
    const update=await Lesson.findByIdAndUpdate(userId,updateTeacher)//if not find using id used findOne
    .then(()=>{
        res.status(200).send({
            status:"Teacher Lesson Updated"
        });
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({
        status:"Error with updating data",error:err.message
    });
    })
    })
    
    //delete
    router.route("/deleteLesson/:id").delete(async(req,res)=>{
        let userId=req.params.id;
    
        await Lesson.findByIdAndDelete(userId)
        .then(()=>{
    res.status(200).send({status:"Teacher Lesson Deleted"});
        }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete teacher lesson",error:err.message});
        })
    })
    
    
        
    
    
module.exports=router;