import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


//use effect is responible for when we navigate to AllNotices page, which data wants to be display from the AllNotices page

export default function TeacherMyNotices(props){
 
    const [notices, setNotices] = useState([]); //[] - array, data get from the db to this arraya
   
    let [errorMsg,seterrormsg] = useState("");

    useEffect(()=>{
        async function getNotices() {
            let namei = "";
            namei = localStorage.getItem("name");
            console.log(namei);
            axios
              .get("http://localhost:8091/notice/getnotices")
              .then((res) => {
               // console.log(res.data);
                console.log("innnnn");
                
                setNotices(res.data.filter((notice) => notice.name === namei));
                console.log(res.data);

               
              })
              .catch((err) => {
                alert(err.msg);
              });
          }
          getNotices();
          
    }, [])

    function deleteNotice(id) {
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios .delete("http://localhost:8091/notice/delete/" + id)
         .then((res) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remainNotice = notices.filter(
                  (content) => content._id != id
              );
     
              setNotices(remainNotice);
             

          }).catch((err) => {
             console.log(err);
          })

        }
      });
      }

      function edit(id) {
        console.log(id);
       props.history.push("/Admin/updateNotice/" + id);
        
      }
    


   //search
 
      

    return(
        
      <div style={{marginLeft:"325px",width:"76%"}}>
        <div className="container">
        <h1>My Notices</h1>
        <div className="container">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'20px', height:'50px', width:'200px'}}>
                 <a href="/Admin/AddNotice" style={{textDecoration:'none', color:'white'}}>Add Notice</a>
                </button>
                    </div>
                    <br/>
                 
            <h6 id="AdminLoginError" style={{color:"red"}}>{errorMsg}</h6>  
            <br/>
            {notices.map((notices, index) => {
                return(
                  <div>
                    <br></br>
      <div className="card">
        
      <h5 className="card-header">{index + 1}. {notices.notice_id}</h5>
      <div className="card-body" style={{ height :"350px"}}>
      <h5 className="card-title">{notices.name}</h5>
        <h5 className="card-title">{notices.header}</h5>
        <p className="card-text">{notices.description}</p>
        <img
                      src={"/upload/" + notices.noticeImage}
                      alt="noticeImage"
                      width="110px"
                      height="110px"
                      
                    />

</div>



<div class="containerq">
  <div class="vertical-center">
  <button type="button" className="btn btn-primary"  id ="aaaa"  onClick={() => {
                        edit(notices._id);
                      }} >Update</button>
                      <br/>
        <button type="button" className="btn btn-danger" id ="aaaa" onClick = {()=>{deleteNotice(notices._id)}}>Delete</button>
  </div>
</div>
       
        
      </div>
      
    </div>
    
     );
     
    })}
    <br/>
    </div>
    <br></br>
    </div>

    )
   
}