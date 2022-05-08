import React from "react";
import axios from "axios";
import swal from "sweetalert";


const initialState={
            email:"",
            password:"",
            emailError:"",
            passwordError:"",
           
        
}

export default class StudentLogin extends React.Component{
    constructor(props){
        super(props);

        this.state={
            alertMsg:"",
            initialState, 
            teacher:{}
    };
    }

    handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }





validate =()=>{


let emailError="";
let passwordError="";






if(!this.state.email){
    emailError="Email Cannot Be Empty"
}else if(!this.state.email.includes("@")){
    emailError="Invalid Email";
}


if(!this.state.password){
    passwordError="Password Cannot Be Empty"
}




if(emailError || passwordError ){
this.setState({emailError,passwordError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {email,password}=this.state;
        const data={
            email:email,
            password:password
       
           
        }
    
        
    
        axios.post("http://localhost:8091/onlineStudent/loginStudent",data).then((res)=>{
        //   alert("Teacher login successfully!");
          this.setState({
            teacher:res.data.datastudent
              });
          console.log("data",res.data. datastudent.email);
          localStorage.setItem("username",res.data. datastudent.stuName);
          localStorage.setItem("userId",res.data. datastudent._id);
          localStorage.setItem("userProfile",res.data. datastudent.profileImage);
          this.setState(initialState);
            // this.props.history.push("/homeStudent");
        
            swal({
                title: "You are successfully login",
                icon: "success",
                button: "ok",
            }).then(function() {
                window.location = "/homeStudent";
            });
        
               
            
            }).catch(error=>{
                swal({
                    title: "Invalid Login",
                    text: "Please re-enter your details.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  }).then(function() {
                    window.location = "/studentLogin";
                });
            })
    }
}

reset() {
    this.setState({
    email:"",
   password:"",
})
}
    
    render(){
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
            
            <div>
            
            <form >
              <div class="container">
              
                <h1>Sign In</h1>
                <p>Please fill in this form to SignIn</p>
                <hr/>
            
                
            <label for="email" ><b>Email</b></label>
            <input type="text"  id="email"
            name="email" 
             placeholder="xxxx@gmail.com" 
             value={this.state.email} 
            onChange={this.handlInputChange}
            />
            {this.state.emailError ?(
            <div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
            ):null}
            
           
            
            
            <label for="password" ><b>Password</b></label>
            <input type="password" id="password"
            name="password" 
             placeholder="Enter password" 
             value={this.state.password} 
            onChange={this.handlInputChange}
            />
                  
            
            
            
            
            
            
                
                <label>
                  <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
                </label>
                
                <p>Do not have an account <a href="/onlineStudentRegister" style={{"color":"dodgerblue"}}>Create account</a>.</p>
            
                <div class="clearfix">
                  
                  <button className="cancelbtn" onChange={this.reset} style={{width:"40%"}}>Reset</button> &nbsp;&nbsp; 
                  &nbsp;&nbsp;<button type="submit" className="signupbtn" onClick={this.onSubmit} style={{width:"40%", marginLeft:"50px"}}>SignIn</button>
            
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