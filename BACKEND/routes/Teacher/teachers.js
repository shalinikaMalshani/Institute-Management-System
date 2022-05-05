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
    const rType=req.body.rType;
    const password=req.body.password;
    const confirmPassword=req.body.confirmPassword;

   

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
        date,
        rType,
    password,
confirmPassword});

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

//report
router.route("/report/:s_date/:e_date").get((req,res)=>{
    let start=req.params.s_date;
    let end=req.params.e_date;
    
    console.log("start,end",start,end);
    
        Teacher.find(
            { date : { $gt :start, $lt : end}}
            
            ).exec((err,teachers)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:true,
                report:teachers
            })
        
        })
      
    });
    

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


    //login
    router.post("/teacherLogin", async(req,res) => {
            try{
                const {email, password} = req.body;
                //check with database username
                const teacherLogin = await Teacher.findOne({email: email});
                if(!teacherLogin){
                     res.status(400).json({error: "Teacher does not exists"});
                }else if (password == teacherLogin.password){
                        return res.json({
                         success:true,
                         datat:teacherLogin
                        });
                        
                     }else{ 
                        res.status(400).json({error: "Invalid Credientials"});
                     }
              }catch(err){
                console.log(err);
        }
    })    
    

module.exports=router;