import React from "react";
import axios from "axios";

export default class mySubject extends React.Component{

    constructor(props){
        super(props);
      
        this.state={//All the teachers stores in a array
          userName:"",
          subject1:"",
          subject2:"",
          subject3:"",
          subject4:"",
          pID:"",
          name:"",
        };
      } 
      

// componentDidMount(){
//    this.setState({
//     username:localStorage.getItem("userName")

//    }) 
        
// }

componentDidMount(){
    // const userName = localStorage.getItem("username"); 
     
     let z = localStorage.getItem('username')
     console.log(z);
    axios.get("http://localhost:8091/onlinePayment/getSubject/" + z).then((res) =>{
        console.log(res.data)
        this.setState({
                    stuName:res.data.stuName,
                    // address:res.data.onlineStudents.address,
                    // birthDay:res.data.onlineStudents.birthDay,
                    // gender:res.data.onlineStudents.gender,
                    // email:res.data.onlineStudents.email,
                    // phone:res.data.onlineStudents.phone,
                    // school:res.data.onlineStudents.school,
                    // stream:res.data.onlineStudents.stream,
                    // guardianName:res.data.onlineStudents.guardianName,
                    // admissionFees:res.data.onlineStudents.admissionFees,
                    // rdate:res.data.onlineStudents.rdate,
                    subject1: res.data.subject1,
                    subject2: res.data.subject2,
                    subject3: res.data.subject3,
                    subject4: res.data.subject4,
                    pID:res.data._id,
                    
                });
                console.log(res.data)
                console.log(this.state.onlinePayment);
                localStorage.setItem("subject1",res.data.subject1)
                localStorage.setItem("subject2",res.data.subject2)
                localStorage.setItem("subject3",res.data.subject3)
                localStorage.setItem("subject4",res.data.subject4)
                localStorage.setItem("pID",res.data._id)
                localStorage.setItem("name",res.data.stuName)
            }
        
     ) }

    render(){
        return(

            <React.Fragment>

            <header class="header_four">

  <div class="edu_nav">
      <div class="container">
          <nav class="navbar navbar-expand-md navbar-light bg-faded">
              <a class="navbar-brand" href="index-2.html"><img src="asset/images/logo.png" alt="logo"/></a>
              <div class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                  <ul class="navbar-nav nav lavalamp ml-auto menu">
                      <li class="nav-item"><a href="#" class="nav-link active">Home</a>
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
                      <li class="nav-item"><a href="#" class="nav-link">Pages</a>
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
                              <li class="nav-item"><a href="teacher-profile.html" class="nav-link">Teachers Profile</a></li>
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


  
    <div className="rev_slider_wrapper">
       <div id="rev_slider_1" className="rev_slider"> 
           {/* <ul> */}
               {/* <li style={{"dataIndex":"rs-1706", "dataTransition":"fade","dataSlotamount":"7" ,"dataHideafterloop":"0"," dataHideslideonmobile":"off", "dataEasein":"default"," dataEaseout":"default" ,"dataMasterspeed":"1000","dataRotate":"0" , "dataSaveperformance":"off", "dataTitle":"Slide"}}>  */}

                   
              <div className="slider-overlay">
                  <img src="asset/images/banner/classBanner3.jpg" alt="Sky" className="rev-slidebg"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" data-no-retina style={{height:"", width:"100%"}}/>
                  <div style={{position:"absolute", left:"50px", bottom:"100px",color:"white"}}><h1><b> My Enrolled Subject </b></h1></div>
                </div> 
        
      </div>
  </div>
   
</header> 

            

            <div className="card-box"  style={{marginLeft:"430px", width:"400px", height:"450px", marginTop:"60px", marginBottom:"50px", outlineStyle:"inset" }}><br></br>
               <div style={{margin:"40px"}}>
                <h3>Subject 1 :  {this.state.subject1}</h3>
                <h3>Subject 2 :  {this.state.subject2}</h3>
                <h3>Subject 3 : {this.state.subject3}</h3>
                <h3>Subject 4 :{this.state.subject4}</h3>
               </div>


                 <button className="btn btn-danger" style={{marginLeft:"30px",marginTop:"20px", height:"40px",width:"150px"}}
                  onClick={() => this.onDelete(this.props.match.params.id)}>
                 <i class="fas fa-trash-alt"></i>&nbsp; &nbsp;Delete</button>


                 <a className="btn btn-warning"   style={{marginLeft:"50px", marginTop:"10px", height:"40px",width:"150px"}}  
                //  href={`/updateOnlinePayment/${this.props.match.params.pID}`}>
                href={`/updateOnlinePayment/${this.state.pID}`}>
                         <i className="fas fa-edit"></i>&nbsp; &nbsp;Edit
                       </a> 






</div>
<footer class="footer_2" style={{height:"350px"}}>
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
}