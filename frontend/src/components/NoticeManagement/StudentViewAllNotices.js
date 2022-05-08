import React, { useState, useEffect } from "react";
import axios from "axios";

//use effect is responible for when we navigate to AllNotices page, which data wants to be display from the AllNotices page

export default function StudentViewAllNotices(props){
 
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
      
    </div>
    
     );
     
    })}
    <br/>
    </div>
    </div>
 
    )
   
}