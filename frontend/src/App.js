import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import CreateTeacher from "./components/TeacherManagement/CreateTeacher";
import EditTeacher from "./components/TeacherManagement/EditTeacher";
import ReportInput from "./components/TeacherManagement/ReportInput";
import SideMenu from "./SideMenu";
import TeacherDetail from "./components/TeacherManagement/TeacherDetail";
import TeacherLeave from "./components/TeacherManagement/TeacherLeave";
import AllTeachers from "./components/TeacherManagement/AllTeachers";




function App() {
  return (
    <BrowserRouter>
    <SideMenu/>
  <Route path="/teacherAll" exact component={AllTeachers}/>
  <Route  path="/teacherAdd" exact component={CreateTeacher} />
  <Route  path="/teacherEdit/:id" exact component={EditTeacher} />
  <Route  path="/teacher/:id" exact component={TeacherDetail} />
  <Route  path="/teacherLeave" exact component={TeacherLeave} />
  <Route  path="/teacherReportInput" exact component={ReportInput} />

</BrowserRouter>

  );
}

export default App;
