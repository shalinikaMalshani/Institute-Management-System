import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function StudentViewAllInquiries(props){
  //let navigate = useNavigate();

    const [inquiries, setInquiries] = useState([]); //[] - array, data get from the db to this arraya
    useEffect(()=>{
        function getInquiries() {
          let namei = "";
          namei = localStorage.getItem("name");
          console.log(namei);
            axios
              .get("http://localhost:8091/inquiry/getinquries")
              .then((res) => {
                console.log("innnnn");
                
                setInquiries(res.data.filter((inquiry) => inquiry.name === namei));
                console.log(res.data);
               // console.log(res.data);
              })
              .catch((err) => {
                alert(err.msg);
              });
          }
          getInquiries();
          
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
        .delete("http://localhost:8091/inquiry/delete/" + id) 
        .then((res) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          
  
  
          const afterDeleteInquiry = inquiries.filter(
            (content) => content._id != id
          );
  
  
          setInquiries(afterDeleteInquiry);
        })
        .catch((err) => {
          alert(err);
        });
    }
  });
  }

  function edit(id) {
    console.log(id);
   props.history.push("/Student/EditInquiry/" + id);
   // navigate("/Student/EditInquiries/" +id);
    
  }


    function handleSearch(e) {
     let inqSearch = e;
console.log(inqSearch);
     
      
     //setErrorMsg("");
      axios
        .get("http://localhost:8091/inquiry/getinquries")
        .then((res) => {
        console.log(res.data);
          filterContent(res.data, inqSearch);
        })
        .catch((err) => {
          alert(err);
        });
    }
  
  
      //search
      function filterContent(data, inqSearch) {
        console.log("filter");
        console.log(data);
        console.log(inqSearch);
        let result = data.filter(
          (post) =>
            post.name.toLowerCase().includes(inqSearch) ||
            post.subjects.toLowerCase().includes(inqSearch) ||
           post.inquiry_id.toLowerCase().includes(inqSearch)
        );
        console.log(result);
        setInquiries(result);
    
        if (result != null) {
         
        }
    
        if (result.length == 0) {
       // setErrorMsg("No Result Found!");
        //alert("No Result Found!");
        
        }
       
        
      }


    return(
      <div style={{marginLeft:"325px",width:"76%"}}>
        <div className="container">
          <h1>All Inquiries</h1>
          
          
          <div className="container">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'20px', height:'50px', width:'200px'}}>
                 <a href="/Student/AddInquiry" style={{textDecoration:'none', color:'white'}}>Add Notice</a>
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
<br/>
{inquiries.map((inquiries, index) => {
                return(

                  

<div className="card w-75">


  <div className="card-body">
    <h5 className="card-title">{index + 1}. {"  Inquiry Id: "}{inquiries.inquiry_id}</h5>
    <h5 className="card-title">{"  Student name: "}{inquiries.name}</h5>
    <h5 className="card-title">{"  Student Email: "}{inquiries.email}</h5>
    <h5 className="card-title">{"  Subject: "}{inquiries.subjects}</h5>
    <h5 className="card-title">{"  Grage: "}{inquiries.grade}</h5>
    <img
                      src={"/upload/" + inquiries.inqimage}
                      alt="inqimage"
                      width="110px"
                      height="110px"
                      //className="rounded-circle"
                    />
    <h5 className="card-title">{"  Heading: "}{inquiries.inqHeader}</h5>

    <p className="card-text">{inquiries.inqBody}</p>
    <button type="button" className="btn btn-danger" onClick = {()=>{deletee(inquiries._id)}}>Delete</button>
    <button type="submit" class="btn btn-primary" onClick = {()=>{edit(inquiries._id)}}>Edit</button>
  </div>
</div>

);
     
})}
</div>
  </div>
    
   
  )
}