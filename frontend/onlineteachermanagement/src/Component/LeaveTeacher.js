import React from "react";
import axios from "axios";
import swal from "sweetalert";
import "./customSignUP.css";


const initialState={
    name:"",
    type:"",
    duration:"",
    fDate:"",
    tDate:"",
    reason:"",
    nameError:"",
    typeError:"",
    durError:"",
    fError:"",
    tError:"",
    reasonError:""
  
  }

export default class LeaveTeacher extends React.Component{
    constructor(props) {
        super(props);
        this.state = { status: 0, initialState }; // 0: no show, 1: show yes, 2: show no.
        
      }

      handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

    //get dropdown value
    onChangeSelect = e=>{
      this.setState({type:e.target.value});
  }
  




      radioHandler = (status) => {
        if(status===1){
          this.state.duration="Single Day"
        }else{
          this.state.duration="Multiple Days"
        }  
    this.setState({ status });
    
    
   };

    onSubmit=(e)=>{
        
        e.preventDefault();
    
    const {name,type,duration,fDate,tDate,reason}=this.state;
    const data={
        name:name,
        type:type,
        duration:duration,
        fDate:fDate,
        tDate:tDate,
        reason:reason
        
    }

    
    axios.post("http://localhost:8091/addLeave",data).then((res)=>{
        if(res.data.success){
            swal({
                title: "You are successfully add leave detail",
                icon: "success",
                button: "ok",
            }).then(function() {
                window.location = "/homeTeacher";
            });
        
        } 
      }).catch(error=>{
        swal({
            title: "Error occoured",
            text: "Please re-enter your details.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(function() {
            window.location = "/leaveTeacher";
        });
      })
  
  }
    
     
  resetDetails=e=>{
    e.preventDefault();
   this.setState({
     name:"",
     type:"",
     duration:"",
     fDate:"",
     tDate:"",
     reason:""})
 }

    
    render(){
        const { status } = this.state;
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
                <a class="navbar-brand" href="index-2.html"><img src="asset/images/logo.png" alt="logo"/></a>
                <div class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                    <ul class="navbar-nav nav lavalamp ml-auto menu">
                        <li class="nav-item"><a href="#" class="nav-link active">Home</a>
                          
                        </li>
                  
                        <li class="nav-item"><a href="course.html" class="nav-link">Courses</a>
                            <ul class="navbar-nav nav mx-auto">
                                <li class="nav-item"><a href="/addLesson" class="nav-link">Chemistry</a></li>
                                <li class="nav-item"><a href="/addLesson" class="nav-link">Physics</a></li>
                            </ul> 
                        </li>
                        <li class="nav-item"><a href="blog.html" class="nav-link">Notices</a>
                            
                        </li>
                        <li class="nav-item"><a href="blog.html" class="nav-link">Inquires</a>
                            
                            </li>
                            <li class="nav-item"><a href="/addMeeting" class="nav-link">Schedule Meetings</a>
                            
                            </li>

                            {/* <li class="nav-item"><a href="blog.html" class="nav-link">Add Leave</a>
                            
                            </li> */}
                      
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
                                    <h1>Add Leave</h1>
                                    <div class="pages_links">
                                        <a href="#" title="">Home</a>
                                        <a href="#" title="" class="active">Add Leave</a>
                                    </div>
                                </div>
                            </div>              
            
                        </div>
                    </div> 
                </div> 
            </header> 
            
            <div>
            
            <form >
              <div class="container">
              
                <h1>Add Leave</h1>
                <p>Please fill in this form to add a leave</p>
                <hr/>
            
               
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" 
    name="name" 
    placeholder="First Name Last Name" 
    value={this.state.name} 
    onChange={this.handlInputChange}
  />
     {this.state.nameError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
):null}
    
  
<label for="type" className="form-label">Leave Type</label>
<select  onChange={this.onChangeSelect} className="form-select" name="type" id="type" >
        <option selected disabled >--Select type--</option>
        <option value="Casual">Casual Leave</option>
        <option value="sick">Sick Leave</option>
</select>
          

    <label for="duration" className="form-label">Duration</label>
<div>
    <input type="radio" 
    name="single"
         id="single"  
          value="Single Day"
          
           checked={status === 1} onClick={(e) => this.radioHandler(1)}
          
        />Single Date
      &nbsp;
        <input type="radio" 
         id="multiple" 
         name="multiple"
         value="Multiple Days"
         
         checked={status === 2} onClick={(e) => this.radioHandler(2)}
         /> Multiple Days

  {status === 1 && <div className="mb-3"><label for="fDate" className="form-label">Date</label>
<input type="date" className="form-control" id="fDate"
value={this.state.fDate} 
onChange={this.handlInputChange}
name="fDate" 
 placeholder="Enter  date" 
 
/>
{this.state.fError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.fError}</div>
):null}
</div>}
         {status === 2 && <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="fDate" className="form-label">From Date</label>
              <input type="date" className="form-control" id="fDate"name="fDate" placeholder="Enter from date"
              value={this.state.fDate} 
              onChange={this.handlInputChange} />
         
              </div>
              </div>
              <div className="col-6"><div className="mb-3">
                <label for="tDate" className="form-label">To Date</label>
                <input type="date" className="form-control" id="tDate" name="tDate" placeholder="Enter to date"
                value={this.state.tDate} 
                onChange={this.handlInputChange} />
           
                </div></div></div>}  
     
</div>
 
    <label for="reason" className="form-label">Reason of Leave</label>
    <textarea className="form-control" id="name" cols={50} rows={3}
    name="reason" 
    placeholder="Enter the reason here" 
    value={this.state.reason} 
onChange={this.handlInputChange}
  />
    
 
        
            
                <div class="clearfix">
                  
                  <button className="cancelbtn" onChange={this.reset} >Reset</button>
              <button type="submit" className="signupbtn" onClick={this.onSubmit} >SignIn</button>
            
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
}