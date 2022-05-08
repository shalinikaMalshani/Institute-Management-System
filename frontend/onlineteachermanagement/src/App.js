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


import TeacherAllInquiries from "./Component/TeacherAllInquiries";
import TeacherViewAllNotices from "./Component/TeacherViewAllNotices";
import TeacherMyNotices from "./Component/TeacherMyNotices";
import TeacherAddNotices from "./Component/TeacherAddNotice";
import TeacherUpdareNotices from "./Component/TeacherUpdareNotices";
import AddAllInquiry from "./Component/AddAllInquiry";
import StudentUpdateInqiury from "./Component/StudentUpdateInqiury";
import AllInquiries from "./Component/StudentAllInquiry";

function App() {
  return (
    <BrowserRouter>
   <Route path="/homeTeacher" exact component={HomeTeacher}/>
 <Route path="/teacherAlll" exact component={AllTeachers}/>
 <Route path="/teacherProfile/:id" exact component={TeacherProfile}/>
<Route path="/teacherSignUp" exact component={TeacherSignUp}/>
 <Route path="/homeNewTeacher" exact component={HomeNewTeacher}/>
<Route path="/teacherSignIn" exact component={TeacherLogin}/>
<Route path="/addLesson" exact component={addLesson}/>
 <Route path="/addMeeting" exact component={addMeeting}/>
 <Route path="/AllMeetings" exact component={AllMeetings}/>
 <Route path="/AllLessons" exact component={AllLessons}/>















 <Route path="/homeNewStudent" exact component={HomeNewStudent}/>
 <Route path="/studentRegisterDetails" exact component={StudentRegisterDetails}/>
 <Route path="/onlineStudentRegister" exact component={StudentRegister}/>
 <Route path="/homeStudent" exact component={HomeStudent}/>
 <Route path="/studentLogin" exact component={StudentLogin}/>
 <Route path="/gets/:id" exact component={StudentProfile}/>
 <Route path="/enrolledSubject" exact component={EnrolledSubject}/>




<Route path="/AllInquiries" exact component={TeacherAllInquiries}/>
<Route path="/AllNotices" exact component={TeacherViewAllNotices}/>
<Route path="/MyNotices" exact component={TeacherMyNotices}/>
<Route path="/AddNotices" exact component={TeacherAddNotices}/>
<Route path="/updateNotices/:id" exact component={TeacherUpdareNotices}/>
<Route path="/AddInquiry" exact component={AddAllInquiry}/>
<Route path="/UpdateInquiry/:id" exact component={StudentUpdateInqiury}/>
<Route path="/StudentAllInquiries" exact component={AllInquiries}/>

    </BrowserRouter>
    
  );
}

export default App;
