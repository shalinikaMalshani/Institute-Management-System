import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
//import { useNavigate } from 'react-router-dom';

//import "../../css/login.css";

export default function AdminLogin(props){
    //let navigate = useNavigate();
    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [errorMsg,seterrormsg] = useState("");


    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
   

    function loginUser(e){
console.log("hello");
        e.preventDefault();
        console.log("hello");
        const loginCredentials = {
            username,
            password,
          }
          console.log("hello");
          axios.post("http://localhost:8091/Admin/loginAdmin", loginCredentials).then((res)=>{
            
            localStorage.setItem("name", username);
            
            console.log(loginCredentials);
         // alert("login success");
         Swal.fire('Successfully Login!',  'You clicked the button!',  'success')
          seterrormsg("");
          console.log("hello world");
          props.history.push("/Admin/profile");
         // console.log(res.data.adminLogin._id);
         // localStorage.setItem("AdminID",res.data.adminLogin._id);


          }).catch((err) =>{

         console.log(err.response.data);
          //alert("Invalid login");


          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Your Username & Password!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
         seterrormsg(err.response.data.error);
        

        })
    }


    return(
      <div class="container">
      <div class="row">
          <div class="col-md-4 offset-md-4">
              <div class="login-form bg-light mt-4 p-4">
                  <form action="" method="" class="row g-3" onSubmit={loginUser}>
                      <h4>Welcome Back</h4>
                      <h6 id="AdminLoginError" style={{color:"red"}}>{errorMsg}</h6>
                      <div class="col-12">
                          <label>Username</label>
                          <input type="text" name="username" class="form-control" placeholder="Username"  onChange={(e) => {
                          setusername(e.target.value);
                        }}  required/>
                      </div>
                      <div class="col-12">
                          <label>Password</label>
                          <i></i>
                    <i          
                       onClick={togglePassword}
                    ></i>
                          <input type="password" name="password" class="form-control" placeholder="Password"  onChange={(e) => {
                          setpassword(e.target.value);
                        }}/>
                      </div>
                      <div class="col-12">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="rememberMe"/>
                              <label class="form-check-label" for="rememberMe"> Remember me</label>
                          </div>
                      </div>
                      <div class="col-12">
                          <button type="submit" class="btn btn-dark float-end">Login</button>
                      </div>
                  </form>
                  <hr class="mt-4"/>
                  <div class="col-12">
                      <p class="text-center mb-0">Have not account yet? <a href="/Register">Signup</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}