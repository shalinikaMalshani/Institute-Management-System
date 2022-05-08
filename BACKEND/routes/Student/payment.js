const express = require ('express')
let payment = require("../../models/Student/Payment.js");


const router = express.Router();

//add data to the database
router.route("/addPayment").post((req,res) => {

    // const{}= req.body;
    const{stuName,subject1,subject2,subject3,subject4,teacher,
        teacher2,teacher3,teacher4,total,amount,email,stream,rdate}= req.body;
           
        var Tot = 1200+5500;
          

     const newPayment=  new payment({
        stuName,
        email,
        stream,
        rdate,
        subject1,
        subject2,
        subject3,
        subject4,
        teacher,
        teacher2,
        teacher3,
        teacher4,
        // fees1,
        // fees2,
        // fees3,
        // fees4,
        // fees5,
        // fees6,
        total,
        amount
       
     }) 

     var Tot2 =(req.body.fees1+req.body.fees2+req.body.fees3+req.body.fees4+req.body.fees5+req.body.fees6);
     var Tot3 = req.body.total;
      


    newPayment.save((err) => {
        if(err){
            return res.status(400).json({
                error:err

            });
        }

        return res.status(200).json({
            // Total2:Tot2,
            // Total:Tot,
            // Total3:Tot3,
            success:"Payment added successfully"

        });

    });

});


//get all payment details
router.get("/payments",(req,res) =>{
    payment.find().exec((err,payments) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPost:payments
        }); 

    });
});

//update payment details

router.route("/updatePayment/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{stuName,subject1,subject2,subject3,subject4,teacher,
        teacher2,teacher3,teacher4,total,amount,email,stream,rdate} = req.body; //D Structure 

        const updatePayment = {// create object
        stuName,
        email,
        stream,
        rdate,
        subject1,
        subject2,
        subject3,
        subject4,
        teacher,
        teacher2,
        teacher3,
        teacher4,
    }

    const update = await payment.findByIdAndUpdate(userId,updatePayment)
    .then( () => {
        res.status(200).send({
        success:"Update Successfully"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 });

 //delete payment
 router.route("/deletePayment/:id").delete(async(req, res) =>{
    let userId = req.params.id;
    
    await payment.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send( {status: "Subjects Deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete data", error: err.message})
    })
});



//get enrollment subject detail using id

router.get("/getPayment/:id", (async(req,res) =>{
    let userId = req.params.id;

    payment.findById(userId,(err,payment) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({success:true,payment})
    });

}));

module.exports = router;