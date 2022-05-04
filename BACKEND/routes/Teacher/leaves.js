const router=require("express").Router();

const e = require("express");

//need the model
let Leave=require("../../models/Teacher/leave");

//create teacher
router.route("/addLeave").post((req,res)=>{ //http:...../student/add

    //create variable to store attributes
    const name=req.body.name;
    const type=req.body.type;
    const duration=req.body.duration;
    const fDate=req.body.fDate;
    const tDate=req.body.tDate;
    const reason=req.body.reason;
    
    //initilaize the above atributes
    const newTeacherLeave=new Leave({
        name,
        type,
        duration,
        fDate,
        tDate,
        reason});

    //.then->If success do this.javascript promise
    newTeacherLeave.save().then(()=>{
        return res.status(200).json({
                         success:"Teacher Leave Added Successfully!"
                     }); //send the message to frntend vis json reaponse format
    }).catch((err)=>{
        return res.status(400).json({
            status:"Error with save data",error:err.message
        });
    })
})

//read teacher
router.route("/AllLeaves").get((req,res)=>{
Leave.find().exec((err,teachers)=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingLeaves:teachers
    })

})
})


    


//update
//async method.Here can handle muliple requests without crashing
router.route("/updateLeave/:id").put(async(req,res)=>{
    //store userid
    let userId=req.params.id;//get the id that coming from parameter
    
    //get all the updated details.destrcher method
    const {name,type,duration,fDate,tDate,reason}=req.body;
    
    const updateTeacher={
        name,
        type,
        duration,
        fDate,
        tDate,
        reason
    }
    
    const update=await Leave.findByIdAndUpdate(userId,updateTeacher)//if not find using id used findOne
    .then(()=>{
        res.status(200).send({
            status:"Teacher Leave Updated"
        });
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({
        status:"Error with updating data",error:err.message
    });
    })
    })
    
    //delete
    router.route("/deleteLeave/:id").delete(async(req,res)=>{
        let userId=req.params.id;
    
        await Leave.findByIdAndDelete(userId)
        .then(()=>{
    res.status(200).send({status:"Teacher Leave Deleted"});
        }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete teacher leave",error:err.message});
        })
    })
    
    //get a sepcific teacher
    router.route("/teacherLeave/:id").get(async(req,res)=>{
        let userId=req.params.id;
        
        Teacher.findById(userId,(err,teacher)=>{
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