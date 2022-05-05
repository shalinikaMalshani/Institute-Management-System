import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddInquiry(props){
  
 // let navigate = useNavigate();
  const [inquiry_id, setinquiry_id] = useState("");
  const [name, setname] = useState("");
  const [grade, setgrade] = useState("");
  const [subjects, setsubjects] = useState("");
  const [email, setemail] = useState("");
  const [inqHeader, setinqHeader] = useState("");
  const [inqBody, setinqBody] = useState("");
  const [picture, setPicture] = useState("");
  const [imgData, setImgData] = useState("");
 

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
        document.getElementById("addedImage").hidden = false;
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  let inqimage = "";
 // let image2 = "";
  let image3 = "";

  function images() {
    inqimage = document.getElementById("inq_image").value;
    image3 = inqimage.substring(12);
  }


  //............................................................................................

  function setDate(e){
    let flag = 0;
    e.preventDefault();
    images();

    //.....................................................................
    if (document.getElementById("exampleCheck1").checked == true) {
      const newInquiry = {
        inquiry_id : "inq78641",
        name : "Banuka",
        grade,
        subjects,
        email,
        inqHeader,
        inqBody,
        inqimage : image3
         
       };


  console.log(newInquiry);
  
    

    axios.post("http://localhost:8091/inquiry/add", newInquiry).then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Notice Submitted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
     props.history.push("/Student/AllInquiries");
     
     //navigate("/Inquiry/AllInquiries");

    })
    .catch((err) => {
      console.log(err);
    });
} else{
  Swal.fire("You must agree to terms and conditions!");
}

}

    return(
      <div style={{marginLeft:"325px",width:"76%"}}> 
      <h1> Add Inquiry </h1>
        <form /*onSubmit={changeOnClick} encType="multipart/form-data"*/ onSubmit={setDate}>
        

        <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
    </div>

    
    <div class="form-group col-md-4">
      <label for="inputState">Subject</label>
      <select id="inputState" class="form-control" onChange={(e)=>{setsubjects(e.target.value)}}>
        <option selected>Choose Subject...</option>
        <option>combined mathematics</option>
        <option>Physics</option>
        <option>Chemistory</option>
        <option>Biology</option>
      </select>
    </div>
    
    <div class="form-group col-md-4">
      <label for="inputState">Grade</label>
      <select id="inputState" class="form-control" onClick={(e)=>{setgrade(e.target.value)}}>
        <option selected>Choose Subject...</option>
        <option> 12 </option>
        <option> 13 </option>
        
      </select>
    </div>

    






    <div className="container">
  <br/>
    <label for="exampleInputPassword1">Header</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Header"
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
                 onChange={(e) => {
                  setinqBody(e.target.value);
                 }}
                 required
               ></textarea>
             </div>

             </div>

             <div className="container">
            <label htmlFor="exampleFormControlFile1" style={{ color: "black" }}>
              Notice Image
            </label>
            <input
              type="file"
              className="form-control-file"
              id="inq_image"
              onChange={onChangePicture}
              required
            />
          </div>
          <div className = "container">

          <div className="ImagePreview">
            <img
              id="addedImage"
              src={imgData}
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

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Accept all terms and conditions
            </label>
            </div>
          </div>



<div className="container">
    <br/>
  <button type="submit" className="btn btn-primary" /* onClick={()=>setDate()}*/>Submit</button>
  </div>
</div>
        
 </form>
      </div>
    )
     }
                