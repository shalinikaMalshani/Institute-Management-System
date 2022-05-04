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
// import OnlineAllLessonStuView from "./components/TeacherManagement/OnlineAllLessonStuView";





function App() {
  return (
    <BrowserRouter>
    <SideMenu/>



</BrowserRouter>

  );
}

export default App;
