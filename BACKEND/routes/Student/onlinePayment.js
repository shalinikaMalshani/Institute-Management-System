const express = require ('express')
let onlinePayment = require("../../models/Student/OnlinePayment.js");


const router = express.Router();

//add data to the database
router.route("/addOnlinePayment").post((req,res) => {

    // const{}= req.body;
    const{stuName,subject1,subject2,subject3,subject4,teacher,
        teacher2,teacher3,teacher4,total,amount,email,stream,rdate, paymentSlip}= req.body;
           
        var Tot = 1200+5500;
          

     const newOnlinePayment=  new onlinePayment({
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
        amount,
        paymentSlip
       
     }) 

     var Tot2 =(req.body.fees1+req.body.fees2+req.body.fees3+req.body.fees4+req.body.fees5+req.body.fees6);
     var Tot3 = req.body.total;
      


    newOnlinePayment.save((err) => {
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
router.get("/onlinePayments",(req,res) =>{
    onlinePayment.find().exec((err,onlinePayments) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPost:onlinePayments
        }); 

    });
});

//update payment details

router.route("/updateOnlinePayment/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{stuName,subject1,subject2,subject3,subject4,teacher,
        teacher2,teacher3,teacher4,total,amount,email,stream,rdate,paymentSlip} = req.body; //D Structure 

        const updateOnlinePayment = {// create object
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
        paymentSlip,
    }

    const update = await payment.findByIdAndUpdate(userId,updateOnlinePayment)
    .then( () => {
        res.status(200).send({
        success:"Update Successfully"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 });

 //delete payment
 router.route("/deleteOnlinePayment/:id").delete(async(req, res) =>{
    let userId = req.params.id;
    
    await onlinePayment.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send( {status: "Subjects Deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete data", error: err.message})
    })
});



//get enrollment subject detail using id

router.get("/getOnlinePayment/:id", (async(req,res) =>{
    let userId = req.params.id;

    onlinePayment.findById(userId,(err,onlinePayment) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({success:true,onlinePayment})
    });

}));


//get enrollmnt subject list using student username

router.route("/getSubject/:stuName").get(async (req,res) =>{

    let stuName = req.params.stuName;

    const user = await  onlinePayment.findOne({stuName : stuName}).then((onlinePayment)=>{

        res.json(onlinePayment);

    }).catch((err) =>{

        res.status(500).send({status : "Error", error : err.message});

    })

})

module.exports = router;