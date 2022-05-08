const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");//convert jason to javascript
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT||8091;

//app middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL)
.then(()=>{
   console.log("MongoDB Connected Successfully!!"); 
}).catch((err)=>{
    console.log("MongoDB Connection Error",err.message);
})



//import route
//teacher
const teacherRouter=require("./routes/Teacher/teachers");
const leaveRouter=require("./routes/Teacher/leaves");
const salaryRouter=require("./routes/Teacher/salary");
const lessonRouter=require("./routes/Teacher/lessons");
const meetingRouter=require("./routes/Teacher/meeting");




//student

const studentRouter = require("./routes/Student/student.js");
const onlineStudentRouter = require("./routes/Student/onlineStudent.js");
const paymentRouter = require("./routes/Student/payment.js");
const onlinePaymentRouter = require("./routes/Student/onlinePayment.js");




//class













//app.use("/teacher",teacherRouter);
//teacher
app.use(teacherRouter);
app.use(leaveRouter);
app.use(salaryRouter);
app.use(lessonRouter);
app.use(meetingRouter);






//student
app.use("/student",studentRouter);
app.use("/onlineStudent",onlineStudentRouter);
app.use("/payment",paymentRouter);
app.use("/onlinePayment",onlinePaymentRouter);




//class
















// app.use("/student",studentRouter);






//Make access to admin
const adminRouter = require("./routes/Admin/admin.js");
app.use("/Admin", adminRouter);

//Make access to Inquiry
const InquiryRouter = require("./routes/Inquiry/Inquiry.js");
app.use("/inquiry", InquiryRouter);

//Make access to Notoice route
const NoticeRouter = require("./routes/Notice/Notice.js");
app.use("/notice", NoticeRouter);


app.listen(PORT,() => {//function(){}
    console.log(`Server is up and running on port number :${PORT}`);
    });
