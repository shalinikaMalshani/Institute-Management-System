const router=require("express").Router();

const e = require("express");

//need the model
let Meeting=require("../../models/Teacher/meeting");

//create teacher
router.route("/addMeeting").post((req,res)=>{ //http:...../student/add

    //create variable to store attributes
    const topic=req.body.topic;
    const date=req.body.date;
    const time=req.body.time;
    const link=req.body.link;
    const mId=req.body.mId;
    const passCode=req.body.passCode;
    
    //initilaize the above atributes
    const newTeacherMeeting=new Meeting({
        topic,
        date,
        time,
        link,
        mId,
        passCode});

    //.then->If success do this.javascript promise
    newTeacherMeeting.save().then(()=>{
        return res.status(200).json({
                         success:"Teacher Meeting Added Successfully!"
                     }); //send the message to frntend vis json reaponse format
    }).catch((err)=>{
        return res.status(400).json({
            status:"Error with save data",error:err.message
        });
    })
})

//read teacher
router.route("/AllMeetings").get((req,res)=>{
Meeting.find().exec((err,teachers)=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingMeetings:teachers
    })

})
})


    


//update
//async method.Here can handle muliple requests without crashing
router.route("/updateMeeting/:id").put(async(req,res)=>{
    //store userid
    let userId=req.params.id;//get the id that coming from parameter
    
    //get all the updated details.destrcher method
    const { topic,date,time,link,mId,passCode}=req.body;
    
    const updateMeeting={
        topic,
        date,
        time,
        link,
        mId,
        passCode
    }
    
    const update=await Meeting.findByIdAndUpdate(userId,updateMeeting)//if not find using id used findOne
    .then(()=>{
        res.status(200).send({
            status:"Teacher Meeting Updated"
        });
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({
        status:"Error with updating data",error:err.message
    });
    })
    })
    
    //delete
    router.route("/deleteMeeting/:id").delete(async(req,res)=>{
        let userId=req.params.id;
    
        await Meeting.findByIdAndDelete(userId)
        .then(()=>{
    res.status(200).send({status:"Teacher Meeting Deleted"});
        }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete teacher leave",error:err.message});
        })
    })
    
    //get a sepcific teacher
    router.route("/teacherMeeting/:id").get(async(req,res)=>{
        let userId=req.params.id;
        
        Meeting.findById(userId,(err,teacher)=>{
            if(err){
                return res.status(400).json({
                    success:false,err
                })
            }
        return res.status(200).json({
            success:true,
            teacher
        });
        
        });
        
        });
        
    
    
module.exports=router;