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

<<<<<<< HEAD



=======
//import route
//teacher
const teacherRouter=require("./routes/Teacher/teachers");
const leaveRouter=require("./routes/Teacher/leaves");
const salaryRouter=require("./routes/Teacher/salary");
const lessonRouter=require("./routes/Teacher/lessons");




//student

const studentRouter = require("./routes/Student/student.js");
const onlineStudentRouter = require("./routes/Student/onlineStudent.js");




//class





//notice



//inquire



//admin










//app.use("/teacher",teacherRouter);
//teacher
app.use(teacherRouter);
app.use(leaveRouter);
app.use(salaryRouter);
app.use(lessonRouter);





//student
app.use("/student",studentRouter);
app.use("/onlineStudent",onlineStudentRouter);





//class





//notice



//inquire



//admin



app.use("/student",studentRouter);

>>>>>>> 560e47cfd0244e0a74757ed6e026cc8f83ffde8e


app.listen(PORT,() => {//function(){}
    console.log(`Server is up and running on port number :${PORT}`);
    });



