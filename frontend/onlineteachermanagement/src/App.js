import { BrowserRouter ,Route } from "react-router-dom";
import AllTeachers from './Component/AllTeachers';
import HomeNew from "./Component/HomeNew";
import HomeTeacher from './Component/HomeTeacher';

import TeacherLogin from "./Component/TeacherLogin";
import TeacherProfile from "./Component/TeacherProfile";
import TeacherSignUp from "./Component/TeacherSignUp";



function App() {
  return (
    <BrowserRouter>
   <Route path="/homeTeacher" exact component={HomeTeacher}/>
 <Route path="/teacherAlll" exact component={AllTeachers}/>
 <Route path="/teacherProfile/:id" exact component={TeacherProfile}/>
 
 <Route path="/teacherSignUp" exact component={TeacherSignUp}/>
 <Route path="/" exact component={HomeNew}/>
 
 <Route path="/teacherSignIn" exact component={TeacherLogin}/>
    </BrowserRouter>
    
  );
}

export default App;
