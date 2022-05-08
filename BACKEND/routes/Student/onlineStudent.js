const express = require("express");
// const OnlineStudent = require("../models/OnlineStudent.js");
let onlineStudent = require("../../models/Student/OnlineStudent.js");

const router = express.Router();

//add data to the database
// router.route("/onlineAdd").post(async(req,res) => {

//     // const name = req.body.name;
//     // const address = req.body.address;
//     // const birthDay = Date(req.body.birthDay);
//     // const gender = req.body.gender;
//     // const email = req.body.email;
//     // const phone = req.body.phone;
//     // const school = req.body.school;
//     // const stream = req.body.stream;
//     // const guardianName = req.body.guardianName;
//     // const admissionFees = req.body.admissionFees;
//     // const regDate = Date(req.body.regDate);
//     const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate,userName,password,confirmPassword}= req.body;
    
//     try{

//         const emailExist = await onlineStudent.findOne({ email: email});
     
//         if(emailExist){
     
//          return res.status(422).json({ error: "Username Already Exist"});
//         //  alert("Username Already Exist")
//        }


//      const newOnlineStudent =  new onlineStudent({
//          stuName,
//          address,
//          birthDay,
//          gender,
//          email,
//          phone,
//          school,
//          stream,
//          guardianName,
//          admissionFees,
//          rdate,
//          userName,
//          password,
//          confirmPassword
//      }) 

//     newOnlineStudent.save((err) => {
//         if(err){
//             return res.status(400).json({
//                 error:err

//             });
//         }

//         return res.status(200).json({
//             success:"Students saved successfully"

//         });

//     });
//     } catch(err){
        
//     }
// });

router.route("/onlineAdd").post((req,res)=>{

    const  stuName = req.body. stuName;
    const address = req.body.address;
    const birthDay = req.body.birthDay;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;
    const school = req.body.school;
    const stream = req.body.stream;
    const guardianName = req.body.guardianName;
    const admissionFees = req.body.admissionFees;
    const rdate = req.body.rdate;
    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const profileImage = req.body.profileImage;
    const paymentSlip = req.body.paymentSlip;

//  try{

//    const emailExist = await onlineStudent.findOne({ email: email});

//    if(emailExist ){

//     return res.status(422).json({ error: "Username Already Exist"});
//   }

    const newOnlineStudent = new onlineStudent({
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
        rdate,
        userName,
        password,
        confirmPassword,
        profileImage,
        paymentSlip,
        
    })


      newOnlineStudent.save((err) => {
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


//get all student details
router.get("/onlineStudents",(req,res) =>{
    onlineStudent.find().exec((err,onlineStudents) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPost:onlineStudents
        }); 

    });
});


 //Delete student

 router.route("/onlineDelete/:id").delete(async(req, res) =>{
    let userId = req.params.id;
    
    await onlineStudent.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send( {status: "User Deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete data", error: err.message})
    })
});


//get student detail using student id

router.get("/gets/:id", (async(req,res) =>{
    let userId = req.params.id;

    onlineStudent.findById(userId,(err,onlineStudents) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({success:true,onlineStudents})
    });

}));



// //login the system
// router.post('/loginStudent', async(req,res) => {

//     try{
//             const {email, password, userName} = req.body;

//             if(!email || !password || !userName){

//                 return res.status(400).json({error: "Please filled the all data"})
//             }

//             //check with database email
//             const studentLogin = await onlineStudent.findOne({email: email});
    
//             //console.log(customerLogin);
//             if(!studentLogin){

//                 res.status(400).json({error: "Student does not exists"});

//             }

//             else if (password == studentLogin.password && userName == studentLogin.userName){

//                  res.json({message: "Student Sign In Successfully"});
//                 //  localStorage.setItem('name', userName)
//                 //  localStorage.setItem('email', email)
//                 //  localStorage.setItem('password', password)
//                 console.log(res.status.error);
//                 res.json({Login: {
//                     _id : Login._id,
//                 }})
//                 localStorage.setItem('id', _id)
               
                
//             }else{ 

//                 res.status(400).json({error: "Invalid Credientials"});
               
//             }
          

//     }catch(err){

//         console.log(err);
//     }


// });


//update the online student

router.route("/onlineUpdate/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate,profileImage} = req.body; //D Structure 

    const updateOnlineStudent = { // create object
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
        rdate,
        profileImage
    }

    const update = await onlineStudent.findByIdAndUpdate(userId,updateOnlineStudent)
    .then( () => {
        res.status(200).send({
        success:"Update Successfully"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 });


  //login
  router.post("/loginStudent", async(req,res) => {
    try{
        const {email, password} = req.body;
        //check with database username
        const loginStudent = await onlineStudent.findOne({email: email});
        if(!loginStudent){
             res.status(400).json({error: "Student does not exists"});
        }else if (password == loginStudent.password){
                return res.json({
                 success:true,
                 datastudent:loginStudent
                });
                
             }else{ 
                res.status(400).json({error: "Invalid Credientials"});
             }
      }catch(err){
        console.log(err);
}
})    



module.exports = router;