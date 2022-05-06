import React from "react";
import axios from "axios";
import "./customSignUP.css";


const initialState={
    name:"",
    photo:"",
    age:"",
    gender:"",
    email:"",
    qualification:"",
    mobile:"",
    subject:"Chemistry",
    date:"",
    password:"",
    confirmPassword:"",
    emailError:"",
    nameError:"",
    phoneError:"",
    genderError:"",
    quaError:"",
    ageError:"",
    subError:"",
    dateError:"",
    passwordError:"",
    typeError:""

}

export default class TeacherSignUp extends React.Component{

    constructor(props){
        super(props);

        this.state={alertMsg:"",initialState,rType:"Online"};
    }

    handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

onChangeSelect = e=>{
    this.setState({subject:e.target.value});
}

// changeType = e=>{
//     this.setState({rType:e.target.value});
// }

onChangeFile =e=>{
    let file=e.target.files;
    console.log("file",file);
    let reader=new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload =e=>{
        console.log("image url",e.target.result);
        this.setState({photo:e.target.result});
    }
}

validate =()=>{

let nameError="";
let genderError="";
let quaError="";
let subError="";
let ageError="";
let emailError="";
let phoneError="";
let dateError="";
let passwordError="";



if(!this.state.name){
    nameError="Name Cannot Be Empty"
}

if(!this.state.gender){
    genderError="Gender Cannot Be Empty"
}

if(!this.state.qualification){
    quaError="Qualification Cannot Be Empty"
}

if(!this.state.subject){
    subError="Subject Cannot Be Empty"
}

let agePattern=/^[A-Za-z]+$/;

if(!this.state.age){
    ageError="Age Cannot Be Empty"
}else if(this.state.age.match(agePattern)){
    ageError="Cannot enter any characters"
}else if(this.state.age<0){
    ageError="Invalid age";
}

if(!this.state.date){
    dateError="Date Cannot Be Empty"
}



if(!this.state.email){
    emailError="Email Cannot Be Empty"
}else if(!this.state.email.includes("@")){
    emailError="Invalid Email";
}

let pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(!this.state.mobile){
    phoneError="Contact Cannot Be Empty"
}else if(this.state.mobile.length>10 || this.state.mobile.length<10 || !this.state.mobile.match(pattern)){
phoneError="Invalid Phone Number";
}

if(!this.state.password){
    passwordError="Password Cannot Be Empty"
}

if(!this.state.confirmPassword){
    passwordError="Password Cannot Be Empty"
}

// if(!this.state.type){
//     typeError="Type Cannot Be Empty"
// }

if(emailError || nameError || genderError || phoneError || subError || dateError|| ageError || quaError || passwordError ){
this.setState({emailError,nameError,phoneError,subError,ageError,dateError,quaError,passwordError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {name,photo,age,gender,email,qualification,mobile,subject,date,rType,password,confirmPassword}=this.state;
        const data={
            name:name,
            photo:photo,
            age:age,
            gender:gender,
            email:email,
            qualification:qualification,
            mobile:mobile,
            subject:subject,
            date:date,
            rType:rType,
            password:password,
            confirmPassword:confirmPassword
           
        }
    
        
    
        axios.post("http://localhost:8091/add",data).then((res)=>{
          alert("Teacher added successfully!");
          console.log("data",data);
          this.setState(initialState);
            this.props.history.push("/teacherSignIn");
        }).catch(error=>{
            alert("Error occoured.Please check and resubmit the details.");
        })
    
    }
}

reset() {
    this.setState({name:"",
    photo:"",
    age:"",
    gender:"",
    email:"",
    qualification:"",
    mobile:"",
    subject:"",
    date:"",
   rType:"",
password:"",
confirmPassword:""})
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
                        <h1>Register</h1>
                        <div class="pages_links">
                            <a href="#" title="">Home</a>
                            <a href="#" title="" class="active">Register</a>
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
  <input type="text" className="form-control" id="rType" style={{"display":"none"}}
    name="rType" 
    defaultValue={this.state.rType}
    value={this.state.rType} 
    onChange={this.handlInputChange}/>
    

    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account and register to our Amzo Learning</p>
    <hr/>

    <label for="name" ><b>Name</b></label>
    <input type="text"  id="name" 
    name="name" 
    placeholder="First Name Last Name" 
    value={this.state.name} 
    onChange={this.handlInputChange}/>
    {this.state.nameError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
):null}

<label for="age" ><b>Age</b></label>
    <input type="text" id="age"
    name="age" 
     placeholder="Enter age"
    
     min="0"
     value={this.state.age} 
    onChange={this.handlInputChange}
    />
    {this.state.ageError?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.ageError}</div>
):null}

<label for="gender" className="form-label"><b>Gender</b></label>
<div>
    <input type="radio" 
    name="gender"
         id="male"  
          value="Male" 
          onChange={this.handlInputChange}
          checked={this.state.gender === "Male"} 
        />Male
      &nbsp;
        <input type="radio" 
         id="female" 
         name="gender"
         onChange={this.handlInputChange}
           value="Female"
           checked={this.state.gender === "Female"}  /> Female
     </div>
     {this.state.genderError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.genderError}</div>
):null}

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

<label for="qualification" ><b>Qulifications(Comma Seperated)</b></label>
<input type="text"  id="qualification" 
name="qualification" 
placeholder="MSc,phD" 
value={this.state.qualification} 
onChange={this.handlInputChange}/>
{this.state.quaError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.quaError}</div>
):null}

<label for="mobile"><b>Contact</b></label>
<input type="text"  id="mobile"
name="mobile" 
 placeholder="xxx xxx xx xx" 
 value={this.state.mobile} 
onChange={this.handlInputChange}
/>
{this.state.phoneError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.phoneError}</div>
):null}


<label for="subject" ><b>Subject</b></label>
<select onChange={this.onChangeSelect}  name="subject" id="subject">
        <option selected disabled >--Select Subject--</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>

        {this.state.subError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.subError}</div>
):null}

</select>
        

<label for="date" ><b>Join Date</b></label>
<input type="date"  id="date"
name="date" 
 placeholder="Enter join date" 
 value={this.state.date} 
onChange={this.handlInputChange}
/>
{this.state.dateError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.dateError}</div>
):null}



{/* <input type="text" className="form-control" id="type" style={{display:'none'}}
name="type" 
 
 value={this.state.type} 
onChange={this.handlInputChange}
/> */}


  <label for="formFile">Photo</label>
  <input  type="file" id="photo" name="photo" onChange={this.onChangeFile}/>



<label for="password" ><b>Password</b></label>
<input type="password" id="password"
name="password" 
 placeholder="Enter password" 
 value={this.state.password} 
onChange={this.handlInputChange}
/>
      


<label for="confirmPassword"><b>Confirm Password</b></label>
<input type="password" id="confirmPassword"
name="confirmPassword" 
 placeholder="confirmPassword" 
 value={this.state.confirmPassword} 
onChange={this.handlInputChange}
/>



    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      
      <button className="cancelbtn" onChange={this.reset} >Reset</button>
  <button type="submit" className="signupbtn" onClick={this.onSubmit} >Submit</button>

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