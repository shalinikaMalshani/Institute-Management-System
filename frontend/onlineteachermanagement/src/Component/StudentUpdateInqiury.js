import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function StudentUpdateInqiury(props){
   
   const [inquries, setInquries] = useState([]);
   const [name, setname] = useState("");
   const [grade, setgrade] = useState("");
   const [subjects, setsubjects] = useState("");
   const [email, setemail] = useState("");
   const [inqHeader, setinqHeader] = useState("");
   const [inqBody, setinqBody] = useState("");
   let [currentImage, setCurrentImage] = useState("");
  // const {id}=useParams();

   let inqimage = "";
  let objectID = "";
   let image2 = "";
   let image3 = "";
   let flag1 = 0;


   const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   function validatereg() {
 
   
 
 
     if(email.length === 0){
     flag1 = 0;
     Swal.fire("email is required!"); 
     }
 
     else if (!email.match(EmailAdd)) {
       flag1 = 0;
       Swal.fire("You have entered an invalid email address!");
     }  
 
 
 
     else if(inqHeader.length === 0){
       flag1 = 0;
       Swal.fire("Header is required!"); 
       }
 
       else if(inqBody.length === 0){
         flag1 = 0;
         Swal.fire("Body is required!"); 
         }
 
   
    
 
   else {
     flag1 = 1;
   }
 
   }

 
   useEffect(() => {
     objectID = props.match.params.id;
     function getinquries() {
       axios
         .get("http://localhost:8091/inquiry/get/" + objectID)
         .then((res) => {
            setInquries(res.data);
            setname(res.data.name);
            setgrade(res.data.grade);
            setsubjects(res.data.subjects);
            setemail(res.data.email);
            setinqHeader(res.data.inqHeader);
            setinqBody(res.data.inqBody);

           setCurrentImage(res.data.inqimage);
           inqimage = res.data.inqimage;

         })
         .catch((err) => {
           alert(err.msg);
         });
     }
     getinquries();
   }, []);
 
   function inquiryI() {
       console.log("hello");
       inqimage = document.getElementById("inqimage").value;
   }
 
   function Imagecheck() {
     let rimage = document.getElementById("inqimage").value;
 
     if (rimage === "") {
       image3 = currentImage;
     } else {
       image2 = document.getElementById("inqimage").value;
 
       image3 = image2.substring(12);
     }
     console.log("hello");
   }
 
   function updateInquiry() {
       console.log("hello");
       validatereg();
       inquiryI();
     Imagecheck();
 
     const updateInquiry = {
      inquiry_id: inquries.inquiry_id,
      name,
      grade,
      subjects,
       email,
       inqHeader,
       inqBody,

       inqimage: image3,
     
     };
 
     console.log(updateInquiry);
     objectID = props.match.params.id;
     if (flag1 == 1) {
     axios
       .put("http://localhost:8091/inquiry/update/" + objectID, updateInquiry)
       .then(() => {
          Swal.fire(
            "Success",
            "Your Refund has been successfully updated",
            "success"
          );
      
         props.history.push("/Student/AllInquiries");
    
       })
       .catch((err) => {
         alert(err);
       });
   }
  }

   return(
 

      <div style={{marginLeft:"325px",width:"76%"}}> 
      <h1> Edit Inquiry </h1>
        <form /*onSubmit={changeOnClick} encType="multipart/form-data"*/>
        

        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"  value={email} onChange={(e)=>{setemail(e.target.value)}}
     
      />
    </div>

    
    <div class="form-group col-md-4">
      <label for="inputState">Subject</label>
      <select id="inputState" class="form-control"  value={subjects} onChange={(e)=>{setsubjects(e.target.value)}}
      
      >
        <option selected>Choose Subject...</option>
        <option>combined mathematics</option>
        <option>Physics</option>
        <option>Chemistory</option>
        <option>Biology</option>
      </select>
    </div>
    
    <div class="form-group col-md-4">
      <label for="inputState">Grade</label>
      <select id="inputState" class="form-control" value={grade} onClick={(e)=>{setgrade(e.target.value)}}
       
      >
        <option selected>Choose Subject...</option>
        <option> 12 </option>
        <option> 13 </option>
        
      </select>
    </div>

        <div className="container">
  <br/>
    <label for="exampleInputPassword1">Header</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Header"
      value={inqHeader}
    onChange={(e) => {
      setinqHeader(e.target.value);
    }}
  
    />
  </div>
<br/>
  <div className="container">
  <br/>
     <div className="mb-3" style={{ width: "1090px" }}>
               <label for="exampleInputPassword1" class="form-label">
                 Enter Description
               </label>
               <textarea
                 rows="5"
                 class="form-control"
                 id="description"
                 placeholder="Description"
                 required
                 value={inqBody}
                 onChange={(e) => {
                  setinqBody(e.target.value);
                 }}
                
               ></textarea>
             </div>

             </div>

             <div className="container">
            <label htmlFor="exampleFormControlFile1" style={{ color: "black" }}>
              Inquiry Image
            </label>
            <input
              type="file"
              className="form-control-file"
              id="inqimage"
             
            />
          </div>
          <div className = "container">

          <div className="ImagePreview">
            <img
              
              src={"/upload/" + inquries.inqimage}
              
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                width: "150px",
                height: "150px",
                border: "none",
                marginTop: "10px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              hidden
            />
          </div>
         <br/>

         
          </div>



<div className="container">
    <br/>
  <button type="button" className="btn btn-primary" onClick={() => updateInquiry(inquries._id)}>Submit</button>
  </div>
</div>
        
 </form>
      </div>



   )
}