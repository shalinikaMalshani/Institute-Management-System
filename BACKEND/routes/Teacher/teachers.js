const router=require("express").Router();

const e = require("express");
//need the model
let Teacher=require("../../models/Teacher/teacher");

//create teacher
router.route("/add").post((req,res)=>{ //http:...../student/add

    //create variable to store attributes
    const name=req.body.name;
    const photo=req.body.photo;
    const age=Number(req.body.age);
    const gender=req.body.gender;
    const email=req.body.email;
    const qualification=req.body.qualification;
    const mobile=req.body.mobile;
    const subject=req.body.subject;
    const date=req.body.date;

    //initilaize the above atributes
    const newTeacher=new Teacher({
        name,
        photo,
        age,
        gender,
        email,
        qualification,
        mobile,
        subject,
        date});

    //.then->If success do this.javascript promise
    newTeacher.save().then(()=>{
        return res.status(200).json({
                         success:"Teacher Added Successfully!"
                     }); //send the message to frntend vis json reaponse format
    }).catch((err)=>{
        return res.status(400).json({
            error:err
        });
    })
})

//read teacher
router.route("/AllTeachers").get((req,res)=>{
Teacher.find().exec((err,teachers)=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingTeachers:teachers
    })

})
})

//read teacher
router.route("/Report").post((req,res)=>{
    let s_date=[req.query.s_date || []].flat();
    let e_date=[req.query.e_date || []].flat();
console.log(s_date,e_date);
    let songDB = Teacher.find(
        {
            date: {$gte: s_date, $lte: e_date}
        }).sort('rating');
    console.log(songDB)
    return songDB;

    // Teacher.find.exec((err,teachers)=>{
    //     if(err){
    //         return res.status(400).json({
    //             error:err
    //         });
    //     }
    //     return res.status(200).json({
    //         success:true,
    //         existingTeachers:teachers
    //     })
    
    // })
    })
    


//update
//async method.Here can handle muliple requests without crashing
router.route("/update/:id").put(async(req,res)=>{
    //store userid
    let userId=req.params.id;//get the id that coming from parameter
    
    //get all the updated details.destrcher method
    const {name,photo,age,gender,email,qualification,mobile,subject,date}=req.body;
    
    const updateTeacher={
        name,
        photo,
        age,
        gender,
        email,
        qualification,
        mobile,
        subject,
        date
    }
    
    const update=await Teacher.findByIdAndUpdate(userId,updateTeacher)//if not find using id used findOne
    .then(()=>{
        res.status(200).send({
            status:"Teacher Updated"
        });
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({
        status:"Error with updating data",error:err.message
    });
    })
    })
    
    //delete
    router.route("/delete/:id").delete(async(req,res)=>{
        let userId=req.params.id;
    
        await Teacher.findByIdAndDelete(userId)
        .then(()=>{
    res.status(200).send({status:"Teacher deleted"});
        }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete teacher",error:err.message});
        })
    })
    
    
    //get a sepcific teacher
    router.route("/teacher/:id").get(async(req,res)=>{
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