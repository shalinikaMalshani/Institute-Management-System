import React, { useState, useEffect} from "react";
import axios from "axios";
//import Swal from 'sweetalert2';

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

    return(
        <div style={{marginLeft:"325px",width:"40%"}}>
            <h1>hello</h1>
                      <h1>{admin.username}</h1>
                    </div>
    )
}