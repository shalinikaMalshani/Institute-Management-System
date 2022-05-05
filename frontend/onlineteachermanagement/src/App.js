import { BrowserRouter ,Route } from "react-router-dom";
import AllTeachers from './Component/AllTeachers';
import HomeTeacher from './Component/HomeTeacher';


function App() {
  return (
    <BrowserRouter>
   <Route path="/" exact component={HomeTeacher}/>
 <Route path="/teacher" exact component={AllTeachers}/>

    </BrowserRouter>
    
  );
}

export default App;
