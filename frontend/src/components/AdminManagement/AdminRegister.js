import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
//import { useHistory } from "react-router-dom";

export default function AdminRegister(props){
    
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [email, setemail] = useState("");
    let logo = "";
    let logo2 = "";
    let logo3 = "";
    let [errorMsg, setErrorMsg] = useState("");
    let flag1 = 0;

    const checkbox = document.getElementById("policy");

    const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    function validatereg() {

      if(firstName.length === 0){
        flag1 = 0;
        Swal.fire("first name is required!");
      }
     
      else if(lastName.length === 0){
        flag1 = 0;
        Swal.fire("last name is required!");
      }

      else if(username.length === 0){
        flag1 = 0;
        Swal.fire("username is required!");
      }

      else if(password.length === 0){
        flag1 = 0;
        Swal.fire("password is required!");
      }

      else if (password.length < 5) {
        flag1 = 0;
        Swal.fire("Password should comtains more that 5 characters!!");
      }

      else if(email.length === 0){
      flag1 = 0;
      Swal.fire("email is required!"); 
      }

      else if (!email.match(EmailAdd)) {
        flag1 = 0;
        Swal.fire("You have entered an invalid email address!");
      }  

      else if (!checkbox.checked) {
        flag1 = 0;
        Swal.fire("You Should Agree To Our Terms & Conditions!!");
      }
    else {
      flag1 = 1;
    }
  
    }

    function sendData(e) {
      // alert("d0");
      e.preventDefault();
       validatereg();

      logo2 = document.getElementById("logo").value;
    logo3 = logo2.substring(12);
  
      const newAdmin = {
        firstName,
        lastName,
        username,
        password,
        email,
        logo: logo3,
      };
  
     
      console.log(newAdmin);
     // console.log("hello");

     if (flag1 == 1) {

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
          
         props.history.push("/");
        
         
          // alert( "Student Added Successfully!");
        })
        .catch((err) => {
            console.log("helloworld");
            Swal.fire(
                'unsuccess!',
                'User name Should be uniqe!',
                'unsuccess'
              )
        });
    }
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
        <div className="card-container">
                      <label style={{ textAlign: "left" }}>Email</label>
                      <br />
                      </div>
        <div class="col">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Email Address"
                 
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
       </div>
       <div className="card-container">
                      <label style={{ textAlign: "left" }}>Profile picture</label>
                      <br />
                      </div>
       <div class="col">
                  <div className="card container-size">
                    <br />
                    <div className="card-container">
                      <label style={{ textAlign: "left" }}>Profile picture</label>
                      <br />
                     
                        <input
                          type="file"
                          name="logo"
                          id="logo"
                          class="form-control-file"
                          placeholder="Allowed types: png/jpg/jpeg"
                          accept="image/*"
                         
                        />
                     
                    </div>
                    <br />
                    <h6 style={{ textAlign: "right" }}>
                      Allowed types : png/jpg/jpeg
                    </h6>
                  </div>
                </div>
                <div class="form-check">
                <br />
                <br />
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="policy"
                  name="policy"
                  value="true"
                />

                <label class="form-check-label" for="defaultCheck1">
                  <b> I agree to the Terms of service </b>
                </label>
              </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}