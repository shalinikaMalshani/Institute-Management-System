import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SideMenu from "../../SideMenu";
//import "../../css/AdminProfile.css"

export default function UpdateAdmin(props) {

  let image2 = "";
  let image3 = "";

  let [currentLogo, setCurrentLogo] = useState("");

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    logo: "",
  });

  

  useEffect(() => {
     function getAdmin() {
      
         var abc = "";
         abc = localStorage.getItem("name");
        // console.log(abc);
      const objectId = props.match.params.id;
      console.log(objectId);
       axios
        .get("http://localhost:8091/Admin/get/"+objectId)
        .then((res) => {
            console.log(res.data);
          setData(res.data);
          //console.log(res.data);
          setCurrentLogo(res.data.logo);
        })
        .catch((err) => {
          alert(err);
        });
    }

    getAdmin();
  }, []);

  function changeLogo() {
    let Clogo = document.getElementById("company_l").value;

    if (Clogo === "") {
      image3 = currentLogo;
      console.log(image3);
      data.logo = image3;
      console.log(data);
    } else {
      image2 = document.getElementById("company_l").value;

      image3 = image2.substring(12);
      console.log(image3);
      data.logo = image3;
      console.log(data);
    }
}

//checked....................................................
  function sendData(e) {
    const objectId = props.match.params.id;
    console.log(objectId);

    e.preventDefault();
    console.log("wow");
    //validatereg();
    changeLogo();
    
console.log("wow");

    axios
    .put("http://localhost:8091/Admin/update/" + objectId, data)
    .then(() => {
      //  alert("Seller Updated Successfully!");
      Swal.fire(
        "Success!",
        "Successfully Updated Your Profile!",
        "success"
      );

      props.history.push("/Seller/MyProfile");
    })
    .catch((err) => {
      alert(err);
    });

}

function handle(e) {
const newdata = { ...data };
newdata[e.target.id] = e.target.value;
setData(newdata);
}


  
    return(
      <div>
      <SideMenu/>
        <div style={{marginLeft:"325px",width:"60%"}} className = "myDiv">
          
          <center>
             <form onSubmit={sendData} style={{marginLeft:"160px", marginTop:"100px"}}>
             <div class="d-flex flex-column align-items-center text-center">
                        <br></br>
                        <img
                          src={"/upload/" + data.logo}
                          alt="Admin"
                          class="rounded-circle p-1 bg-black"
                          width="175"
                        />
                        <br></br>
                      </div>
                      <div className="form-group">
                                  <label for="SellerI" id="SellI">
                                   Profile picture
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control-file"
                                    id="company_l"
                                  />
                                   
                                </div>
                                <br></br>

                                <label className="form-check-label" for="exampleCheck1">
             User Name
            </label>
                        <div class="col">
                              <input
                                type="text"
                                className="form-control"
                                id="year"
                                Value={data.username}
                                readOnly
                                onChange={(e) => handle(e)}
                              />
                            
                              </div>
             <div class="col">
             <label className="form-check-label" for="exampleCheck1">
             First Name
            </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            Value={data.firstName}
                            onChange={(e) => handle(e)}
                          />
                        </div>
                        
                        <div class="col">
                        <label className="form-check-label" for="exampleCheck1">
             Last Name
            </label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            Value={data.lastName}
                            onChange={(e) => handle(e)}
                          />
                          
                        </div>
                      
                              <label className="form-check-label" for="exampleCheck1">
             Password
            </label>
                              <div class="col">
                              <input
                                type="text"
                                className="form-control"
                                id="password"
                                Value={data.password}
                               
                                onChange={(e) => handle(e)}
                              />
                              
                              </div>
                              <label className="form-check-label" for="exampleCheck1">
             Email
            </label>
                        <div class="col">
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            Value={data.email}
                            
                            onChange={(e) => handle(e)}
                          />
                        </div>
                      
                  
                        <br></br>
                    
                         
                            <div className="container">
                              <div class="float-right">
                                <button
                                  class="btn btn-dark"
                                  onClick={() => {
                                    props.history.push("/Seller/MyProfile");
                                  }}
                                >
                                  BACK
                                </button>{" "}
                                <span />
                                <span />
                                <button type="submit" class="btn btn-primary">
                                  UPDATE
                                </button>
                              </div>
                            </div>
                            </form>
                            <br></br>
                          
                            </center>
        </div>
        </div>

    )
}