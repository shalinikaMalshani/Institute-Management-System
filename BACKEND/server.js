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
const teacherRouter=require("./routes/Teacher/teachers");

//app.use("/teacher",teacherRouter);
app.use(teacherRouter);


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



