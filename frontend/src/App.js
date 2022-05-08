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





//students
import Home from "./components/StudentManagement/Home";











//Class
import addClass from "./components/ClassManagement/addClass";
import ClassDetailsHome from "./components/ClassManagement/ClassDetailsHome";
import ClassHome from "./components/ClassManagement/ClassHome";
import updateClass from "./components/ClassManagement/updateClass";
import readClass from "./components/ClassManagement/readClass";
import classReport from "./components/ClassManagement/classReport";
import feeHome from "./components/ClassManagement/feeHome";
import addFee from "./components/ClassManagement/addFee";
import updateFee from "./components/ClassManagement/updateFee";
import feeReport from "./components/ClassManagement/feeReport";
import readFee from "./components/ClassManagement/readFee";
import freeCards from "./components/ClassManagement/freeCards";









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

























{/* class counter*/}
<Route  path="/addDetails" exact component={addClass} />
<Route  path="/classDetailsHome" exact component={ClassDetailsHome} />
<Route  path="/classhome" exact component={ClassHome} />
<Route  path="/updateClass/:id" exact component={updateClass} />
<Route  path="/readClass/:id" exact component={readClass} />
<Route  path="/classReport" exact component={classReport} />
<Route  path="/feeHome" exact component={feeHome} />
<Route  path="/addFee" exact component={addFee} />
<Route  path="/updateFee/:id" exact component={updateFee} />
<Route  path="/feeReport" exact component={feeReport} />
<Route  path="/readFee/:id" exact component={readFee} />
<Route  path="/freeCards" exact component={freeCards} />







{/* notice counter */}




{/* inquire counter */}





{/* admin */}





{/* teacher online */}

<Route  path="/onlineRegister" exact component={OnlineCreateTeacher} />
  <Route  path="/loginTeacher" exact component={OnlineTeacherLogin} />
  <Route  path="/onlineLeave" exact component={OnlineTeacherLeave} />
  <Route  path="/onlineLesson" exact component={OnlineTeacherLesson} />
  <Route  path="/onlineAllLesson" exact component={OnlineTeacherAllLessons} />
 









</BrowserRouter>

  );
}

export default App;