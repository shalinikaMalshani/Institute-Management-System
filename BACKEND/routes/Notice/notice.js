const router = require("express").Router();

let Notice = require("../../models/Notice/Notice");
//const pdf = require('html-pdf');
//const tem = require("../documents/RefundReport");

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const notice_id = req.body.notice_id;
    const header = req.body.header;
   
    const description = req.body.description;
    const noticeImage = req.body.noticeImage;
   
  
    const newNotice = new Notice({
      name,
      notice_id,
      header,
      description,
     noticeImage,
     // date
    });
  
    newNotice
      .save()
      .then(() => {
        res.json({
          newNotice: {
            name: newNotice.name,
            notice_id: newNotice.notice_id,
           header: newNotice.header,
              description: newNotice.description,
              noticeImage: newNotice.noticeImage,
             //console.log(Notice);
            
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.route("/getnotices").get((req, res) => {
    Notice.find()
      .then((Notices) => {
        res.json(Notices);
      })
      .catch((err) => {
        console.log(err);
      });
  });


  router.route("/delete/:id").delete(async (req, res) => {
    let noticeID = req.params.id;
  
    await Notice.findByIdAndDelete(noticeID)
      .then(() => {
        res.status(200).send({ status: "Notice Deleted" });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete", error: err.message });
      });
  });

   

  router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const {name, notice_id, header, description, noticeImage} = req.body;
  
    const updateNotices = {
      name,
      notice_id,
      header,
    description,
    noticeImage,

    };
  
    const update = await Notice.findByIdAndUpdate(userID, updateNotices)
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


  router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
    const user = await Notice.findById(userID)
      .then((notice) => {
        // res.status(200).send({status:"User fetched"});
        res.json(notice);
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .send({ status: "Error with get user", error: err.message });
      });
  });

  router.route("/getn/:name").get(async (req,res) =>{
    let  name = req.params.name;
    const notice = await Notice.findOne({name : name}).then((notice)=>{
        res.json(notice);
    }).catch((err) =>{
        res.status(500).send({status : "Error", error : err.message});
    })
})


  module.exports = router;