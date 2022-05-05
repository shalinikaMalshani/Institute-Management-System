import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
//import { useHistory } from "react-router-dom";

export default function AdminRegister(props){
    
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
  
    function sendData(e) {
      // alert("d0");
      e.preventDefault();
  
      const newAdmin = {
        firstName,
        lastName,
        username,
        password
      };
  
     
      console.log(newAdmin);
     // console.log("hello");
      axios
        .post("http://localhost:8091/Admin/addAdmin", newAdmin)
        .then(() => {
          //alert("Student Added");
          console.log("Hello world");
          Swal.fire(
            'Success!',
            'Request Sent Successfully!',
            'success'
          )
      setErrorMsg("");
          
         props.history.push("/Home");
        
         
          // alert( "Student Added Successfully!");
        })
        .catch((err) => {
            console.log("helloworld");
            Swal.fire(
                'unsuccess!',
                'Request Sent unsuccess!',
                'unsuccess'
              )
        });
    }



    return(
        <div className = "container" style={{marginLeft:"325px",width:"40%"}}>
            <div><h1>Admin Register form</h1></div>
        <form onSubmit={sendData}>
        <div className="form-group" >
          <label for="formGroupExampleInput">firstName</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"  onChange={(e) => {
                setFirstName(e.target.value);
              }}/>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">lastName</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" onChange={(e) => {
                setLastName(e.target.value);
              }}/>
        </div>
        <div className="form-group" >
          <label for="formGroupExampleInput"> username</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={(e) => {
                setUsername(e.target.value);
              }}/>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2"> password</label>
          <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Another input" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}