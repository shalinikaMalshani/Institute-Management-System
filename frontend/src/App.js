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
import OnlineTeacherAllLessons from "./components/TeacherManagement/OnlineTeacherAllLessons";
import OnlineTeacherLessonUpdate from "./components/TeacherManagement/OnlineTeacherLessonUpdate";
import OnlineMeeting from "./components/TeacherManagement/OnlineMeeting";
import OnlineAllMeeting from "./components/TeacherManagement/OnlineAllMeeting";
import OnlineMeetingEdit from "./components/TeacherManagement/OnlineMeetingEdit";
import Homenn from "./components/TeacherManagement/Homenn";





//students
import Home from "./components/StudentManagement/Home";
import StudentAdd from "./components/StudentManagement/StudentAdd";
import AllStudent from "./components/StudentManagement/AllStudent";
import StudentUpdate from "./components/StudentManagement/StudentUpdate";
import Edit from "./components/StudentManagement/Edit";
import StudentDelete from "./components/StudentManagement/StudentDelete";
import StudentDetails from "./components/StudentManagement/StudentDetails";
<<<<<<< HEAD
import StudentReportInput from "./components/StudentManagement/StudentReportInput";
import StudentReport from "./components/StudentManagement/StudentReport";
import StudentPayment from "./components/StudentManagement/StudentPayment";
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
import StudentReportInput from "./components/StudentManagement/StudentReportInput";
import StudentReport from "./components/StudentManagement/StudentReport";
=======
>>>>>>> 550b3e533ab7a12c7cedc2f385d09e9907c0dca4
>>>>>>> f370c74d8a50502665df02314834fb4ee865c62e
>>>>>>> 44d5a4a2ee403cca4ad60bb31816ffbf33be9dda
>>>>>>> d3c42e5a0135e43443309b25e31b54cdf49c0ad5





function App() {
  return (
    <BrowserRouter>
    <SideMenu/>
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























{/* class counter*/}



{/* notice counter */}




{/* inquire counter */}





{/* admin */}





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