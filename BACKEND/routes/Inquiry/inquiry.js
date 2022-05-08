const router = require("express").Router();
//const multer = require("multer");
let Inquiry = require("../../models/Inquiry/Inquiry");


router.route("/add").post((req, res) => {
   
    const  inquiry_id = req.body.inquiry_id;
    const name = req.body.name;
   
    const grade = req.body.grade;
    //const noticeImage = req.body.noticeImage;
    const subjects = req.body.subjects;
    const email = req.body.email;
    const inqHeader = req.body.inqHeader;
    const inqBody = req.body.inqBody;
    const inqimage = req.body.inqimage;
   
  
  
    const newInquiry = new Inquiry({
        inquiry_id,
        name,
        grade,
        subjects,
        email,
        inqHeader,
        inqBody,
        inqimage

});

newInquiry
.save()
.then(() => {
  res.json({
      
      newInquiry: {
        inquiry_id: newInquiry.inquiry_id,
        name: newInquiry.name,
        grade: newInquiry.grade,
       subjects: newInquiry.subjects,
        email: newInquiry.email,
        inqHeader: newInquiry.inqHeader,
        inqBody: newInquiry.inqBody,
        inqimage: newInquiry.inqimage
     
      
    },
  });
  
})
.catch((err) => {
  console.log(err);
});
});



router.route("/delete/:id").delete(async (req, res) => {
  let inquiryID = req.params.id;

  await Inquiry.findByIdAndDelete(inquiryID)
    .then(() => {
      res.status(200).send({ status: "Inquiry Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete", error: err.message });
    });
});


router.route("/getinquries").get((req, res) => {
    Inquiry.find()
      .then((Inquries) => {
        res.json(Inquries);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Inquiry.findById(userID)
      .then((inquiry) => {
        // res.status(200).send({status:"User fetched"});
        res.json(inquiry);
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .send({ status: "Error with get user", error: err.message });
      });
  });


  router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const {inquiry_id, name, grade, subjects, email, inqHeader, inqBody, inqimage} = req.body;
  
    const updateInquiries = {
      inquiry_id,
      name,
      grade,
      subjects,
      email,
      inqHeader,
      inqBody,
      inqimage
    };
  
    const update = await Inquiry.findByIdAndUpdate(userID, updateInquiries)
      .then(() => {
        res.status(200).send({ status: "updated" });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: "Error with updating data", error: err.message });
      });
  });

  //get posts

router.get('/aaa', (req, res) => {

  Inquiry.find().exec((err, Inquiry) => {

    if (err) {

      return res.status(400).json({

        error: err,

      });

    }

    return res.status(200).json({

      success: true,

      existingPosts: Inquiry,

    });

  });

});
  

  module.exports = router;