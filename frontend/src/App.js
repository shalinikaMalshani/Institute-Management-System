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
import StudentAdd from "./components/StudentManagement/StudentAdd";







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
 









</BrowserRouter>

  );
}

export default App;