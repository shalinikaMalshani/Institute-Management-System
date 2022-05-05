const router=require("express").Router();

const e = require("express");

//need the model
let Salary=require("../../models/Teacher/salary");

//create teacher
router.route("/addSalary").post((req,res)=>{ //http:...../student/add

    //create variable to store attributes
    const name=req.body.name;
    const month=req.body.month;
    const basic=Number(req.body.basic);
    const da=Number(req.body.da);
    const ta=Number(req.body.ta);
    const ma=Number(req.body.ma);
    const pf=Number(req.body.pf);
    const gross=Number(req.body.gross);
    const net=Number(req.body.net);

    //initilaize the above atributes
    const newSalary=new Salary({
        name,
        month,
    basic,
    da,
    ta,
    ma,
    pf,
    gross,
    net});

    //.then->If success do this.javascript promise
    newSalary.save().then(()=>{
        return res.status(200).json({
                         success:"Teacher Salary Added Successfully!"
                     }); //send the message to frntend vis json reaponse format
    }).catch((err)=>{
        return res.status(400).json({
            error:err
        });
    })
})

//read teacher
router.route("/AllSalary").get((req,res)=>{
Salary.find().exec((err,teachers)=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingSalaries:teachers
    })

})
})


//update
//async method.Here can handle muliple requests without crashing
router.route("/updateSalary/:id").put(async(req,res)=>{
    //store userid
    let userId=req.params.id;//get the id that coming from parameter
    
    //get all the updated details.destrcher method
    const {name,month,basic,da,ta,ma,pf,gross,net}=req.body;
    
    const updateTeacherSalary={
        name,
        month,
        basic,
        da,
        ma,
        ta,
        pf,
        gross,
        net
    }
    
    const update=await Salary.findByIdAndUpdate(userId,updateTeacherSalary)//if not find using id used findOne
    .then(()=>{
        res.status(200).send({
            status:"Teacher Salary Updated"
        });
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({
        status:"Error with updating data",error:err.message
    });
    })
    })
    
    
    
    //get a sepcific teacher
    router.route("/teacherSalary/:id").get(async(req,res)=>{
    let userId=req.params.id;
    
    Salary.findById(userId,(err,teacher)=>{
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