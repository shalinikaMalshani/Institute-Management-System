const express = require("express");
let student = require("../../models/Student/Student");

const router = express.Router();

//add data to the database
router.route("/add").post((req,res) => {

    // const name = req.body.name;
    // const address = req.body.address;
    // const birthDay = Date(req.body.birthDay);
    // const gender = req.body.gender;
    // const email = req.body.email;
    // const phone = req.body.phone;
    // const school = req.body.school;
    // const stream = req.body.stream;
    // const guardianName = req.body.guardianName;
    // const admissionFees = req.body.admissionFees;
    // const regDate = Date(req.body.regDate);
    const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate}= req.body;
    
     const newStudent =  new student({
         stuName,
         address,
         birthDay,
         gender,
         email,
         phone,
         school,
         stream,
         guardianName,
         admissionFees,
         rdate
     }) 

    //  newStudent.save().then( () =>{
    //      res.json("Student Added")
    //      success:"Posts saved successfully"

    //  }).catch((err)=>{
    //      console.log(err);
    //  })
    newStudent.save((err) => {
        if(err){
            return res.status(400).json({
                error:err

            });
        }

        return res.status(200).json({
            success:"Students saved successfully"

        });

    });

});


// // //Save Posts
// router.post('/add',(req,res) =>{

//     let newStudent = new student(req.body);

//     newStudent.save((err) => {
//         if(err){
//             return res.status(400).json({
//                 error:err

//             });
//         }

//         return res.status(200).json({
//             success:"Posts saved successfully"

//         });

//     });


// });

//get all student details
router.get("/students",(req,res) =>{
    student.find().exec((err,students) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPost:students
        }); 

    });
});

//update student details
router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate} = req.body; //D Structure 

    const updateStudent = { // create object
        stuName,
        address,
        birthDay,
        gender,
        email,
        phone,
        school,
        stream,
        guardianName,
        admissionFees,
        rdate
    }

    const update = await student.findByIdAndUpdate(userId,updateStudent)
    .then( () => {
        res.status(200).send({
        success:"Update Successfully"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 });

// update post

// router.put('/update/:id', (req,res) => {
//     Posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,student) =>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }

//             return res.status(200).json({
//                 success:"Update Successfully"
//             });
//         }
//     );
// });


 //Delete student

 router.route("/delete/:id").delete(async(req, res) =>{
    let userId = req.params.id;
    
    await student.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send( {status: "User Deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete data", error: err.message})
    })
});


//get student detail using student id

router.get("/get/:id", (async(req,res) =>{
    let userId = req.params.id;

    student.findById(userId,(err,students) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({success:true,students})
    });

}));


//Report genaration

router.route("/report/:s_date/:e_date").get((req,res)=>{
    // const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate} = req.body; 
    const{rdate} = req.body; 
    const students ={
        // stuName,
        // address,
        // birthDay,
        // gender,
        // email,
        // phone,
        // school,
        // stream,
        // guardianName,
        // admissionFees,
        rdate
    }

    let start=req.params.s_date;
    let end=req.params.e_date;
    
    console.log("start,end",start,end);

   student.find(
        { rdate : { $gt :start, $lt : end}}
        
        ).exec((err,students)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            report:students
        })
    
    })
  
});


module.exports = router;