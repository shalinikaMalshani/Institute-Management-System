import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


//use effect is responible for when we navigate to AllNotices page, which data wants to be display from the AllNotices page

export default function AllNotices(props){
 
    const [notices, setNotices] = useState([]); //[] - array, data get from the db to this arraya
    let [errorMsg,seterrormsg] = useState("");

    useEffect(()=>{
        function getNotices() {
            axios
              .get("http://localhost:8091/notice/getnotices")
              .then((res) => {
                setNotices(res.data);
               // console.log(res.data);
              })
              .catch((err) => {
                alert(err.msg);
              });
          }
          getNotices();
          
    }, [])


    function deletee(id) {

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
      axios
        .delete("http://localhost:8091/notice/delete/" + id) 
        .then((res) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          
  
  
          const afterDeleteNotice = notices.filter(
            (content) => content._id != id
          );
  
  
          setNotices(afterDeleteNotice);
        })
        .catch((err) => {
          alert(err);
        });
    }
  });
  }

  function edit(id) {
    console.log(id);
   props.history.push("/update/" + id);
   // navigate("/Notice/EditNotices/" +id);
    
  }




  function handleSearch(e) {
    let notSearch = e;
console.log(notSearch);
    
     
seterrormsg("");
     axios
       .get("http://localhost:8091/notice/getnotices")
       .then((res) => {
       console.log(res.data);
         filterContent(res.data, notSearch);
       })
       .catch((err) => {
         alert(err);
       });
   }
 
 
     //search
     function filterContent(data, notSearch) {
       console.log("filter");
       console.log(data);
       console.log(notSearch);
       let result = data.filter(
         (post) =>
           post.notice_id.toLowerCase().includes(notSearch) 
           
       );
      // console.log(result);
       setNotices(result);
   
       if (result != null) {
        
       }
   
       if (result.length == 0) {
        seterrormsg("No Result Found!");
       //alert("No Result Found!");
       
       }}
      

    return(
        
      <div style={{marginLeft:"325px",width:"76%"}}>
        <div className="container">
        <h1>All Notices</h1>
        <div className="container">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'20px', height:'50px', width:'200px'}}>
                 <a href="/Notice/AddNotice" style={{textDecoration:'none', color:'white'}}>Add Notice</a>
                </button>
                    </div>
                    <br/>
        <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        style={{width:"300px"}}
      //  onChange={(e)=>handleTextSearch(e.target.value)}
        onChange={(e) => handleSearch(e.target.value)
        }
      />
            <h6 id="AdminLoginError" style={{color:"red"}}>{errorMsg}</h6>  
            <br/>
            {notices.map((notices, index) => {
                return(
      <div className="card">
      <h5 className="card-header">{index + 1}. {notices.notice_id}</h5>
      <div className="card-body" style={{ height :"350px"}}>
        <h5 className="card-title">{notices.header}</h5>
        <p className="card-text">{notices.description}</p>
        <img
                      src={"/upload/" + notices.noticeImage}
                      alt="noticeImage"
                      width="110px"
                      height="110px"
                      
                    />



<div class="containerq">
  <div class="vertical-center">
  <button type="button" className="btn btn-primary"  id ="aaaa"  onClick={() => {
                        edit(notices._id);
                      }} >Update</button>
                      <br/>
        <button type="button" className="btn btn-danger" id ="aaaa" onClick = {()=>{deletee(notices._id)}}>Delete</button>
  </div>
</div>


       
        
      </div>
      
    </div>
    
     );
     
    })}
    <br/>
    </div>
    </div>
 
    )
   
}