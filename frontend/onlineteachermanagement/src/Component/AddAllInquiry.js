import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddAllInquiry(props){
  
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
  let flag1 = 0;


  const checkbox = document.getElementById("exampleCheck1");

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

    else if (!checkbox.checked) {
      flag1 = 0;
      Swal.fire("You Should Agree To Our Terms & Conditions!!");
    }

   

  else {
    flag1 = 1;
  }

  }
 

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
    validatereg();
    images();

    let namei = "";
    namei = localStorage.getItem("username");
    console.log(namei);
    //.....................................................................
    if (document.getElementById("exampleCheck1").checked == true) {
      const newInquiry = {
        inquiry_id : Date.now(),
        name : namei,
        grade,
        subjects,
        email,
        inqHeader,
        inqBody,
        inqimage : image3
         
       };

  console.log(inquiry_id);
  console.log(newInquiry);
  
  if (flag1 == 1) {

    axios.post("http://localhost:8091/inquiry/add", newInquiry).then((res)=>{
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Notice Submitted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
     props.history.push("/StudentAllInquiries");
     window.location.reload();
     
     //navigate("/Inquiry/AllInquiries");

    })
    .catch((err) => {
      console.log(err);
    });
} else{
  Swal.fire("You must agree to terms and conditions!");
}
    }
}

    return(



      <React.Fragment>


      <header class="header_inner become_a_teacher">
         
          <div class="header_top">
              <div class="container">
                  <div class="row">
                      <div class="col-12 col-sm-12 col-lg-12">
                          <div class="info_wrapper">
                              <div class="contact_info">                   
                                  <ul class="list-unstyled">
                                      <li><i class="flaticon-phone-receiver"></i>+000-2356-222</li>
                                      <li><i class="flaticon-mail-black-envelope-symbol"></i>contact@yourdomain.com</li>
                                  </ul>                    
                              </div>
                              <div class="login_info">
                                   <ul class="d-flex">
                                      <li class="nav-item"><a href="#" class="nav-link sign-in js-modal-show"><i class="flaticon-user-male-black-shape-with-plus-sign"></i>Sign Up</a></li>
                                      <li class="nav-item"><a href="#" class="nav-link join_now js-modal-show"><i class="flaticon-padlock"></i>Lon In</a></li>
                                  </ul>
                                  <a href="#" title="" class="apply_btn">Apply Now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
          <div class="edu_nav">
              <div class="container">
                  <nav class="navbar navbar-expand-md navbar-light bg-faded">
                      <a class="navbar-brand" href="index-2.html"><img src="images/logo.png" alt="logo"/></a>
                      <div class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                          <ul class="navbar-nav nav lavalamp ml-auto menu">
                              <li class="nav-item"><a href="#" class="nav-link">Home</a>
                                  <ul class="navbar-nav nav mx-auto">
                                      <li class="nav-item"><a href="index-2.html" class="nav-link">Home Version 01</a></li>
                                      <li class="nav-item"><a href="index-3.html" class="nav-link">Home Version 02</a></li>
                                      <li class="nav-item"><a href="index-4.html" class="nav-link">Home Version 03</a></li>
                                      <li class="nav-item"><a href="index-5.html" class="nav-link">Home Version 04</a></li>
                                  </ul>
                              </li>
                              <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                              <li class="nav-item"><a href="course.html" class="nav-link">Courses</a>
                                  <ul class="navbar-nav nav mx-auto">
                                      <li class="nav-item"><a href="course.html" class="nav-link">Courses</a></li>
                                      <li class="nav-item"><a href="course-details.html" class="nav-link">Courses Details</a></li>
                                  </ul> 
                              </li>
                              <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a>
                                  <ul class="navbar-nav nav mx-auto">
                                      <li class="nav-item"><a href="blog.html" class="nav-link">Blog List</a></li> 
                                      <li class="nav-item"><a href="blog-2.html" class="nav-link">Blog Grid One</a></li> 
                                      <li class="nav-item"><a href="blog-3.html" class="nav-link">Blog Grid Two</a></li>
                                      <li class="nav-item"><a href="blog-details.html" class="nav-link">Blog Details</a></li>
                                  </ul> 
                              </li>
                              <li class="nav-item"><a href="#" class="nav-link active">Pages</a>
                                  <ul class="navbar-nav nav mx-auto">
                                      <li class="nav-item"><a href="#" class="nav-link dropdown_icon">Courses</a>
                                          <ul class="navbar-nav nav mx-auto">
                                              <li class="nav-item"><a href="course.html" class="nav-link">Courses</a></li>
                                              <li class="nav-item"><a href="course-details.html" class="nav-link">Courses Details</a></li>
                                          </ul>    
                                      </li>                                 
                                      <li class="nav-item"><a href="#" class="nav-link dropdown_icon">Events</a>
                                          <ul class="navbar-nav nav mx-auto">
                                              <li class="nav-item"><a href="event.html" class="nav-link">Event</a></li>
                                              <li class="nav-item"><a href="event-details.html" class="nav-link">Event Details</a></li>
                                          </ul>    
                                      </li>                                
                                      <li class="nav-item"><a href="#" class="nav-link dropdown_icon">Blog</a>
                                          <ul class="navbar-nav nav mx-auto">
                                              <li class="nav-item"><a href="blog.html" class="nav-link">Blog List</a></li> 
                                              <li class="nav-item"><a href="blog-2.html" class="nav-link">Blog Grid One</a></li> 
                                              <li class="nav-item"><a href="blog-3.html" class="nav-link">Blog Grid Two</a></li>
                                              <li class="nav-item"><a href="blog-details.html" class="nav-link">Blog Details</a></li>
                                          </ul>    
                                      </li> 
                                      <li class="nav-item"><a href="become-a-teacher.html" class="nav-link">Become A Teacher</a></li>
                                      <li class="nav-item"><a href="teacher-profile.html" class="nav-link active">Teachers Profile</a></li>
                                      <li class="nav-item"><a href="team.html" class="nav-link">Teachers Page</a></li>
                                      <li class="nav-item"><a href="forgot-password.html" class="nav-link">Forgot Password</a></li>
                                  </ul>                            
                              </li>     
                              <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                          </ul>
                      </div>
                      <div class="mr-auto search_area ">
                          <ul class="navbar-nav mx-auto">
                              <li class="nav-item"><i class="search_btn flaticon-magnifier"></i>
                                  <div id="search">
                                      <button type="button" class="close">×</button>
                                       <form>
                                           <input type="search" value="" placeholder="Search here...."  required/>
                                       </form>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div> 
          </div>
      
          <div class="intro_wrapper">
              <div class="container">  
                  <div class="row">        
                       <div class="col-sm-12 col-md-8 col-lg-8">
                          <div class="intro_text">
                              <h1>Sign In</h1>
                              <div class="pages_links">
                                  <a href="#" title="">Home</a>
                                  <a href="#" title="" class="active">Sign In</a>
                              </div>
                          </div>
                      </div>              
      
                  </div>
              </div> 
          </div> 
      </header> 


      <div style={{marginLeft:"155px",width:"76%"}}> 
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
  <button type="submit" className="btn btn-primary" 
  /* onClick={()=>setDate()}*/>Submit</button>
  </div>
</div>
        
 </form>
      </div>

      <footer class="footer_2">
                <div class="container">
                    <div class="footer_top">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="footer_single_col footer_intro">
                                    <img src="images/logo2.png" alt="" class="f_logo"/>
                                    <p>Ante amet vitae vulputate odio nulla vel pretium pulvinar aenean. Rhoncus eget adipiscing etiam arcu. Ultricies justo ipsum nec amet.</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-2">
                                <div class="footer_single_col">
                                    <h3>Useful Links</h3>
                                    <ul class="location_info quick_inf0">
                                        <li><a href="#">Leadereship</a></li>
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Diversity</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>                         
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-2">
                                <div class="footer_single_col information">
                                    <h3>information</h3>
                                    <ul class="quick_inf0">
                                        <li><a href="#">Leadereship</a></li>
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Diversity</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="footer_single_col contact">
                                    <h3>Contact Us</h3>
                                    <p>Ante amet vitae vulputate odio nulla vel pretium aenean.</p>
                                    <div class="contact_info">
                                        <span>+000 124 325</span> 
                                        <span class="email">info@yourdomain.com</span>
                                    </div>
                                    <ul class="social_items d-flex list-unstyled">
                                        <li><a href="#"><i class="fab fa-facebook-f fb-icon"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter twitt-icon"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in link-icon"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram ins-icon"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                             <div class="col-12 col-md-12 col-lg-12">
                                <div class="copyright">
                                    <a target="_blank" href="https://www.templateshub.net">Templates Hub</a>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div class="shapes_bg">
                    <img src="images/shapes/testimonial_2_shpe_1.png" alt="" class="shape_3"/>        
                    <img src="images/shapes/footer_2.png" alt="" class="shape_1"/>
                </div>    
            </footer>
            
            <section id="scroll-top" class="scroll-top">
                <h2 class="disabled">Scroll to top</h2>
                <div class="to-top pos-rtive">
                    <a href="#"><i class = "flaticon-right-arrow"></i></a>
                </div>
            </section>
            
                
                <script src="js/jquery-3.2.1.min.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>     
                <script src="js/owl.carousel.min.js"></script>   
                <script src="js/slick.min.js"></script>   
                <script src="js/jquery.meanmenu.min.js"></script>    
                <script src="js/wow.min.js"></script> 
                
                <script src="js/waypoints.min.js"></script>
                <script src="js/jquery.counterup.min.js"></script>
                <script src="js/custom.js"></script> 
               
                <script type="text/javascript" src="js/demo.js"></script>
                <div class="demo-style-switch" id="switch-style">
                    <a id="toggle-switcher" class="switch-button" title="Change Styles"><span class="fa fa-cog fa-spin"></span></a>
                    <div class="switched-options">
                        <div class="config-title">
                            <a class="navbar-brand" href="index-2.html"><img src="images/logo.png" alt="logo"/></a>
                            <p>Education Template</p>
                            
                        </div>
                        <div class="demos">
                            <div><a href="index-2.html" data-toggle="tooltip" data-placement="top" title="Home Style One"><img class="main-image img-fluid" src="demo/index_1.png" alt=""/></a></div>
                            <div><a href="index-3.html" data-toggle="tooltip" data-placement="top" title="Home Style Two"><img class="main-image img-fluid" src="demo/index_2.png" alt=""/></a></div>
                            <div><a href="index-4.html" data-toggle="tooltip" data-placement="top" title="Home Style Three"><img class="main-image img-fluid" src="demo/index_3.png" alt=""/></a></div>
                            <ul class="list-unstyled clearfix">
                                <li><a href="about.html" data-toggle="tooltip" data-placement="top" title="About Page"><img src="demo/about.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="blog.html" data-toggle="tooltip" data-placement="top" title="Blog Page"><img src="demo/blog.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="blog-details.html" data-toggle="tooltip" data-placement="top" title="Blog Details Page"><img src="demo/blog_details.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="event.html" data-toggle="tooltip" data-placement="top" title="Event Page"><img src="demo/event.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="event-details.html" data-toggle="tooltip" data-placement="top" title="Event Deiails"><img src="demo/event_details.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="teacher-profile.html" data-toggle="tooltip" data-placement="top" title="Teacher Profile"><img src="demo/teacher_pro.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="course.html" data-toggle="tooltip" data-placement="top" title="Courses Page"><img src="demo/course.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="course-details.html" data-toggle="tooltip" data-placement="top" title="Courses Details"><img src="demo/course_details.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="team.html" data-toggle="tooltip" data-placement="top" title="Team Page"><img src="demo/team.png" alt="" class="img-fluid"/></a></li>
                                <li><a href="contact.html" data-toggle="tooltip" data-placement="top" title="Contact Page"><img src="demo/contact.png" alt="" class="img-fluid"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            
            
                        </React.Fragment>
    )
     }
                