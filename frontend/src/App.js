import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import AllTeachers from "./components/TeacherManagement/AllTeachers";
import CreateTeacher from "./components/TeacherManagement/CreateTeacher";
import EditTeacher from "./components/TeacherManagement/EditTeacher";
import ReportInput from "./components/TeacherManagement/ReportInput";
import SideMenu from "./SideMenu";
import TeacherDetail from "./components/TeacherManagement/TeacherDetail";
import TeacherLeave from "./components/TeacherManagement/TeacherLeave";




function App() {
  return (
    <BrowserRouter>
    <SideMenu/>
  <Route  path="/" exact component={AllTeachers} />
  <Route  path="/add" exact component={CreateTeacher} />
  <Route  path="/edit/:id" exact component={EditTeacher} />
  <Route  path="/teacher/:id" exact component={TeacherDetail} />
  <Route  path="/teacherLeave" exact component={TeacherLeave} />
  <Route  path="/reportInput" exact component={ReportInput} />


    </BrowserRouter>

  );
}

export default App;
