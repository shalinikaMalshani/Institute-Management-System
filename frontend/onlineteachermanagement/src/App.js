import { BrowserRouter ,Route } from "react-router-dom";
import addLesson from "./Component/addLesson";
import addMeeting from "./Component/addMeeting";
import AllMeetings from "./Component/AllMeetings";
import AllLessons from "./Component/AllLessons";
import AllTeachers from './Component/AllTeachers';
import HomeNewTeacher from "./Component/HomeNewTeacher";
import HomeTeacher from './Component/HomeTeacher';

import TeacherLogin from "./Component/TeacherLogin";
import TeacherProfile from "./Component/TeacherProfile";
import TeacherSignUp from "./Component/TeacherSignUp";


import HomeNewStudent from "./Component/HomeNewStudent";
import StudentRegisterDetails from "./Component/StudentRegisterDetails";
import StudentRegister from "./Component/StudentRegister";
import HomeStudent from "./Component/HomeStudent";
import StudentLogin from "./Component/StudentLogin";
import StudentProfile from "./Component/StudentProfile";
import EnrolledSubject from "./Component/EnrolledSubject";


function App() {
  return (
    <BrowserRouter>
   <Route path="/homeTeacher" exact component={HomeTeacher}/>
 <Route path="/teacherAlll" exact component={AllTeachers}/>
 <Route path="/teacherProfile/:id" exact component={TeacherProfile}/>
 
 <Route path="/teacherSignUp" exact component={TeacherSignUp}/>
 <Route path="/homeNewTeacher" exact component={HomeNewTeacher}/>
 
 <Route path="/teacherSignIn" exact component={TeacherLogin}/>
<<<<<<< HEAD
 <Route path="/addLesson" exact component={addLesson}/>
 <Route path="/addMeeting" exact component={addMeeting}/>
 <Route path="/AllMeetings" exact component={AllMeetings}/>
 <Route path="/AllLessons" exact component={AllLessons}/>
=======














 <Route path="/homeNewStudent" exact component={HomeNewStudent}/>
 <Route path="/studentRegisterDetails" exact component={StudentRegisterDetails}/>
 <Route path="/onlineStudentRegister" exact component={StudentRegister}/>
 <Route path="/homeStudent" exact component={HomeStudent}/>
 <Route path="/studentLogin" exact component={StudentLogin}/>
 <Route path="/gets/:id" exact component={StudentProfile}/>
 <Route path="/enrolledSubject" exact component={EnrolledSubject}/>

>>>>>>> 62aaad62d10f2765fa915ca14c6dfc42007c29b7
    </BrowserRouter>
    
  );
}

export default App;
