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




//student






//class





//notice



//inquire



//admin







const studentRouter = require("./routes/Student/student.js");


//app.use("/teacher",teacherRouter);
//teacher
app.use(teacherRouter);
app.use(leaveRouter);
app.use(salaryRouter);
app.use(lessonRouter);





//student






//class





//notice



//inquire



//admin



app.use("/student",studentRouter);



app.listen(PORT,() => {//function(){}
    console.log(`Server is up and running on port number :${PORT}`);
    });



