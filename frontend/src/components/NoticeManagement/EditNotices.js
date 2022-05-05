import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";

//import Swal from "sweetalert2";

export default function EditNotices(props) {
  
    const [notices, setNotices] = useState([]);
    const [header, setheader] = useState("");
    const [description, setDescription] = useState("");
    let [currentImage, setCurrentImage] = useState("");
   // const {id}=useParams();

    let noticeImage = "";
   let objectID = "";
    let image2 = "";
    let image3 = "";
  
    useEffect(() => {
      objectID = props.match.params.id;
      function getNotices() {
        axios
          .get("http://localhost:8091/notice/get/" + objectID)
          .then((res) => {
            setNotices(res.data);
            setheader(res.data.header);
            setDescription(res.data.description);
            setCurrentImage(res.data.noticeImage);
            noticeImage = res.data.noticeImage;
          })
          .catch((err) => {
            alert(err.msg);
          });
      }
      getNotices();
    }, []);
  
    function noticeI() {
        console.log("hello");
        noticeImage = document.getElementById("noticeImage").value;
    }
  
    function Imagecheck() {
      let rimage = document.getElementById("noticeImage").value;
  
      if (rimage === "") {
        image3 = currentImage;
      } else {
        image2 = document.getElementById("noticeImage").value;
  
        image3 = image2.substring(12);
      }
      console.log("hello");
    }
  
    function updateNotice() {
        console.log("hello");
        noticeI();
      Imagecheck();
  
      const updateNotice = {
        notice_id: notices.notice_id,
        header,
       description,
       noticeImage: image3,
      
      };
  
      console.log(updateNotice);
      objectID = props.match.params.id;
      axios
        .put("http://localhost:8091/notice/update/" + objectID, updateNotice)
        .then(() => {
          // Swal.fire(
          //   "Success",
          //   "Your Refund has been successfully updated",
          //   "success"
          // );
       
         // props.history.push("/Admin/AllNotices");
          alert("updated");
        })
        .catch((err) => {
          alert(err);
        });
    }
  
   return(
    
    <div style={{marginLeft:"325px",width:"76%"}}>
    <h1>Update Notice</h1>
    <div>
<form>


<div className="container">
<br/>
<label for="exampleInputPassword1">Header</label>
<input type="text" className="form-control" placeholder="Header"
//value={notices.header}
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
         
          Value={notices.description}
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
          id="noticeImage"/>

      </div>
      <div className = "container">

      <div className="ImagePreview">
        <img
          src={"/upload/" + notices.noticeImage}
          id="noticeImage"
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
         
        />
      </div>
     <br/>

       
      </div>
<div className="container">
<br/>
<button type="submit" className="btn btn-primary" onClick={() => updateNotice(notices._id)}>Update</button>
</div>
</form>
</div>
</div>

   )

}