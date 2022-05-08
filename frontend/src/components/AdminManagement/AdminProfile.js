import React, { useState, useEffect} from "react";
import axios from "axios";
//import "../../css/AdminProfile.css"
//import Swal from 'sweetalert2';
import SideMenu from "../../SideMenu";

export default function AdminProfile(props){

    const [admin, setAdmin] = useState([]);
  
    let namei = "";
    useEffect(() =>{
        
   
        async function getAdmin(){
            namei = localStorage.getItem("name");
            console.log(namei);
            axios.get(`http://localhost:8091/Admin/getAdmin/${namei}`).then((res) =>
            {
                console.log("abc");
                console.log(res.data);
                setAdmin(res.data);
                 console.log(res);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getAdmin();
  
      }, []);

      function update(id){
        console.log(id);
        props.history.push("/Admin/updateProfile/" + id);
    };

    return(
        <div><SideMenu/>
        <div style={{marginLeft:"325px",width:"40%"}} className = "myDiv">
            <h1>hello</h1>
                     <h4>User Name :{admin.username}</h4>
                     <h4>First Name : {admin.firstName}</h4>
                      <h4>Last Name : {admin.lastName}</h4>
                      
                      

                      <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                   
                    <img
                       src = {'/upload/'+admin.logo}
                      alt="Admin"
                      class="rounded-circle p-1 bg-black"
                      width="175"
                    />
                    <br></br>
                  </div>
                  </div>
                      
                      <div class="float-right">
            <span> </span>
						<button type="button" onClick = {()=>update(admin._id)} class="btn btn-primary">EDIT</button>
							<span> </span>
							</div>   
                      
                      
                       
                    </div>
                    </div>
                    
    )
}