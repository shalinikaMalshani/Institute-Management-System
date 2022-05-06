import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
//import { useHistory } from "react-router-dom";


export default function AddNotice(props){
   
  const [notice_id, setnotice_id] = useState("");
  const [header, setheader] = useState("");
  
  const [description, setDescription] = useState("");
  //............................................................................................

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

  let noticeImage = "";
  let image2 = "";
  let image3 = "";

  function images() {
    noticeImage = document.getElementById("notice_image").value;
    image3 = noticeImage.substring(12);
  }


  //............................................................................................

  function setDate(e){
    let flag = 0;
    e.preventDefault();
    images();

    //.....................................................................
    if (document.getElementById("exampleCheck1").checked == true) {
      const newNotice = {
        notice_id : "nt2223872",
      header,
      description,
      noticeImage : image3,
    
    
        
      };
    //............................................................
    

    //create js object
   // const newNotice={
     // notice_id,
     // header,
     // description
  //  }
   console.log(newNotice);
   //form goes to back end as the http request http request
   axios.post("http://localhost:8091/notice/add", newNotice)
    .then(() => {
      // alert("Refund submitted")

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Notice Submitted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
     props.history.push("/Admin/AllNotices");
     
        //navigate("/Notice/AllNotices");

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
        <h1>Add Notice</h1>
        <div>
<form onSubmit={setDate}>
  
 
  <div className="container">
  <br/>
    <label for="exampleInputPassword1">Header</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Header"
    onChange={(e) => {
      setheader(e.target.value);
    }}
    />
    
  </div>
  <br/>
   <div className="container">
     
  <div className="mb-3" style={{ width: "800px" }}>
            <label for="exampleInputPassword1" class="form-label">
              Enter Description
            </label>
            <textarea
              rows="5"
              class="form-control"
              id="description"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
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
              id="notice_image"
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
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
    )
  }