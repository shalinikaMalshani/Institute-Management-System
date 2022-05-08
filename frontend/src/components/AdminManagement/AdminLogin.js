import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./adminSignIn.css";
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
     <div className="container-fluid">
       <div className="row">
         <div className="col-6" >
         <img src={require('../../images/b1.jpg')} style={{width:"100%",height:"147%"}}
                     alt=""/>
         </div>
         <div className="col-6">
       

           
         <div>
            
            <form onSubmit={loginUser} >
              <div class="container">
              
                <h1>Sign In</h1>
                <p>Please fill in this form to SignIn</p>
                <hr/>
            
                
                <label>Username</label>
                          <input type="text" name="username" className="username" placeholder="Username"  onChange={(e) => {
                          setusername(e.target.value);
                        }}  required/>
            
            
           
            
            
            <label>Password</label>
                          <i></i>
                    <i          
                       onClick={togglePassword}
                    ></i>
                          <input type="password" name="password" className="password" placeholder="Password"  onChange={(e) => {
                          setpassword(e.target.value);
                        }}/>
                  
            
            
            
            
            
            
                
                <label>
                  <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
                </label>
                
                <p>Do not have an account <a href="/Register" style={{"color":"dodgerblue"}}>Create account</a>.</p>
            
                <div class="clearfix">
                  
                  {/* <button className="cancelbtn" onChange="" >Reset</button> */}
          <button type="submit" className="signIn" style={{marginLeft:"26%"}} ><a href="/dashboard" style={{textDecoration:"none"}}>SignIn</a></button>
            
                </div>
              </div>
            </form>
                </div>












         

    
        </div>
        </div>
        </div>
    
  );
}