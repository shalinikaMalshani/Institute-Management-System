<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed
import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
// teacher
import AllTeachers from "./components/TeacherManagement/AllTeachers";
import CreateTeacher from "./components/TeacherManagement/CreateTeacher";
import EditTeacher from "./components/TeacherManagement/EditTeacher";
import ReportInput from "./components/TeacherManagement/ReportInput";
import SideMenu from "./SideMenu";
import TeacherDetail from "./components/TeacherManagement/TeacherDetail";
import TeacherLeave from "./components/TeacherManagement/TeacherLeave";
import Salary from "./components/TeacherManagement/Salary";
import AllSalary from "./components/TeacherManagement/AllSalary";
import Navigation from "./components/TeacherManagement/Navigation";
import AllLeaves from "./components/TeacherManagement/AllLeaves";
import Report from "./components/TeacherManagement/Report";
import EditSalary from "./components/TeacherManagement/EditSalary";
import OnlineCreateTeacher from "./components/TeacherManagement/OnlineCreateTeacher";
import OnlineTeacherLogin from "./components/TeacherManagement/OnlineTeacherLogin";
import OnlineTeacherLeave from "./components/TeacherManagement/OnlineTeacherLeave";
import OnlineTeacherLesson from "./components/TeacherManagement/OnlineTeacherLesson";
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed
import OnlineTeacherAllLessons from "./components/TeacherManagement/OnlineTeacherAllLessons";
import OnlineTeacherLessonUpdate from "./components/TeacherManagement/OnlineTeacherLessonUpdate";
import OnlineMeeting from "./components/TeacherManagement/OnlineMeeting";
import OnlineAllMeeting from "./components/TeacherManagement/OnlineAllMeeting";
import OnlineMeetingEdit from "./components/TeacherManagement/OnlineMeetingEdit";
import Homenn from "./components/TeacherManagement/Homenn";


<<<<<<< HEAD
=======


=======
>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed




//students
import Home from "./components/StudentManagement/Home";
import StudentAdd from "./components/StudentManagement/StudentAdd";
import AllStudent from "./components/StudentManagement/AllStudent";
import StudentUpdate from "./components/StudentManagement/StudentUpdate";
import Edit from "./components/StudentManagement/Edit";
import StudentDelete from "./components/StudentManagement/StudentDelete";
import StudentDetails from "./components/StudentManagement/StudentDetails";
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed
import StudentReportInput from "./components/StudentManagement/StudentReportInput";
import StudentReport from "./components/StudentManagement/StudentReport";
import StudentPayment from "./components/StudentManagement/StudentPayment";
import SubjectEnrollmentStudents from "./components/StudentManagement/SubjectEnrollmentStudents";
import UpdateEnrolledSubject from "./components/StudentManagement/UpdateEnrolledSubject";
import EnrolledSubjectDetails from "./components/StudentManagement/EnrolledSubjectDetails";
import OnlineAllStudent from "./components/StudentManagement/OnlineAllStudents";
import OnlineStudentProfile from "./components/StudentManagement/OnlineStudentProfile";
import dashboard from "./dashboard";





<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed






// admin notice inquiry
import AdminLogin from "./components/AdminManagement/AdminLogin";
import AdminRegister from "./components/AdminManagement/AdminRegister";
import AddNotice from "./components/NoticeManagement/AddNotice";
import AllNotices from "./components/NoticeManagement/AllNotices";
import EditNotices from "./components/NoticeManagement/EditNotices";
import UpdateNoticess from "./components/NoticeManagement/updateNoticess";
import AddInquiry from "./components/InquireManagement/AddInquiry";
import AllInquiries from "./components/InquireManagement/AllInquiries";
import StudentViewAllInquiries from "./components/InquireManagement/StudentViewAllInquiries";
import StudentViewAllNotices from "./components/NoticeManagement/StudentViewAllNotices";
import TeacherViewAllNotices from "./components/NoticeManagement/TeacherViewAllNotices";
import StudentUpdateInqiury from "./components/InquireManagement/StudentUpdateInqiury";
import AdminProfile from "./components/AdminManagement/AdminProfile";
import UpdateAdmin from "./components/AdminManagement/UpdateAdmin";
import MyAdminNotices from "./components/NoticeManagement/MyAdminNotices";
// import InquiryReport from "./components/InquireManagement/InquiryReport";
import TeacherAddNotices from "./components/NoticeManagement/TeacherAddNotices";
import TeacherUpdareNotices from "./components/NoticeManagement/TeacherUpdareNotices";
import TeacherMyNotices from "./components/NoticeManagement/TeacherMyNotices";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD

    {/* <SideMenu/> */}


   



    <Route path="/dashboard" exact component={dashboard}/>


=======
<<<<<<< HEAD

   

    <SideMenu/>
    <Route path="/dashboard" exact component={dashboard}/>


=======
    <SideMenu/>
    <Route path="/dashboard" exact component={dashboard}/>

>>>>>>> 8ebfe975afbee2547574482757c11881d521bcbf
>>>>>>> 7a28faaf8edb8d774b85102ed67ee6f7ae0180ed
{/* teacher counter */}
  <Route path="/teacherAll" exact component={AllTeachers}/>
  <Route  path="/teacherAdd" exact component={CreateTeacher} />
  <Route  path="/teacherEdit/:id" exact component={EditTeacher} />
  <Route  path="/teacherSalary/:id" exact component={EditSalary} />
  <Route  path="/teacher/:id" exact component={TeacherDetail} />
  <Route  path="/report/:sDate/:eDate" exact component={Report} />
  <Route  path="/teacherLeave" exact component={TeacherLeave} />
  <Route  path="/teacherReportInput" exact component={ReportInput} />
  <Route  path="/addSalary" exact component={Salary} />
  <Route  path="/AllSalary" exact component={AllSalary} />
  <Route  path="/navTeacher" exact component={Navigation} />
  <Route  path="/allLeaves" exact component={AllLeaves} />


{/* student counter */}

<Route path="/studentDashboard" exact component={Home}></Route>
<Route path="/save" exact component={StudentAdd}></Route>
<Route path="/allStudents" exact component={AllStudent}></Route>
<Route path="/updateStudents" exact component={StudentUpdate}></Route>
<Route path="/update/:id" exact component={Edit}></Route>
<Route path="/delete" exact component={StudentDelete}></Route>
<Route path="/get/:id" exact component={ StudentDetails}></Route>
<Route path="/studentReportInput" exact component={ StudentReportInput}></Route>
<Route path="/studentReport/:sDate/:eDate"exact component={StudentReport}></Route>
<Route path="/studentPayment" exact component={StudentPayment}></Route>
<Route path="/enrolledStudent" exact component={ SubjectEnrollmentStudents}></Route>
<Route path="/updatePayment/:id" exact component={ UpdateEnrolledSubject}></Route>
<Route path="/getPayment/:id" exact component={EnrolledSubjectDetails}></Route>
<Route path="/onlineAllStudent"  exact component={OnlineAllStudent}></Route>
<Route path="/gets/:id" exact component={OnlineStudentProfile}></Route>






















{/* class counter*/}



{/* notice counter & inq & admin */}

{/* <Route  path="/" exact component={AdminLogin} /> */}
  <Route  path="/Register" exact component={AdminRegister}/>
  <Route  path="/Admin/AddNotice" exact component={AddNotice}/>
  <Route  path="/Admin/AllNotices" exact component={AllNotices}/>
  <Route  path="/Admin/EditNotice/:id" exact component={EditNotices}/>
  <Route  path="/Admin/updateNotice/:id" exact component={UpdateNoticess}/>
  <Route  path="/Student/AddInquiry" exact component={AddInquiry}/>
  <Route  path="/Admin/AllInquiries" exact component={AllInquiries}/>
  <Route  path="/Student/AllInquiries" exact component={StudentViewAllInquiries}/>
  <Route  path="/Student/AllNotices" exact component={StudentViewAllNotices}/>
  <Route  path="/Teach/AllNotices" exact component={TeacherViewAllNotices}/>
  <Route  path="/Student/EditInquiry/:id" exact component={StudentUpdateInqiury}/>
  <Route  path="/Admin/profile" exact component={AdminProfile}/>
  <Route  path="/Admin/updateProfile/:id" exact component={UpdateAdmin}/>
  <Route  path="/Admin/MyNotices" exact component={MyAdminNotices}/>
  {/* <Route  path="/Adminnnnn/InquiryReport" exact component={InquiryReport}/> */}
  <Route  path="/Teacher/Notices/add" exact component={TeacherAddNotices}/>
  <Route  path="/Teacher/Notices/update/:id" exact component={TeacherUpdareNotices}/>
  <Route  path="/Teacher/Notices/Mynotices" exact component={TeacherMyNotices}/>


{/* teacher online */}

<Route  path="/onlineRegister" exact component={OnlineCreateTeacher} />
  <Route  path="/loginTeacher" exact component={OnlineTeacherLogin} />
  <Route  path="/onlineLeave" exact component={OnlineTeacherLeave} />
  <Route  path="/onlineLesson" exact component={OnlineTeacherLesson} />
  <Route  path="/onlineAllLesson" exact component={OnlineTeacherAllLessons} />
  <Route  path="/lessonEdit/:id" exact component={OnlineTeacherLessonUpdate} />
  <Route  path="/onlineMeeting" exact component={OnlineMeeting} />
  <Route  path="/onlineAllMeeting" exact component={OnlineAllMeeting} />
  <Route  path="/meetingEdit/:id" exact component={OnlineMeetingEdit} />
  <Route  path="/home" exact component={Homenn} />










</BrowserRouter>

  );
}

export default App;
