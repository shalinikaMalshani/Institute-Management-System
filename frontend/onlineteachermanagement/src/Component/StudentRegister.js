import React from "react";
import axios from "axios";
import "./customSignUP.css";

export default class StudentRegister extends React.Component{

    constructor(props){
        super(props);
        this.state={
                    "stuName":"",
                    "address":"",
                    "birthDay":"",
                    "gender":"",
                    "email":"",
                    "phone":"",
                    "school":"",
                    "stream":"",
                    "guardianName":"",
                    "admissionFees":"",
                    "rdate":"",
                    "userName":"",
                    "password":"",
                    "confirmPassword":"",
                    "profileImage":"",
                    "paymentSlip":"",

        };
        this.onValueChange = this.onValueChange.bind(this);
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;
        
        this.setState({
            ...this.state,
            [name]:value
        })

    }

    //photo input
    onChangeFile =e=>{
        let file=e.target.files;
        console.log("file",file);
        let reader=new FileReader();
        reader.readAsDataURL(file[0]);
    
        reader.onload =e=>{
            console.log("image url",e.target.result);
            this.setState({profileImage:e.target.result}) ;
            // this.setState({paymentSlip:e.target.result});
        }
    }
      //photo input
      onChangeFile2 =i=>{
        let file= i.target.files;
        console.log("file",file);
        let reader=new FileReader();
        reader.readAsDataURL(file[0]);
    
        reader.onload =i=>{
            console.log("image url",i.target.result);
            // this.setState({profileImage:e.target.result}) 
            this.setState({paymentSlip:i.target.result});
        }
    }



//Submit the form
    onSubmit = (e)=>{
        e.preventDefault();

        const isValid = this.validate();
        if(isValid){

        const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate,userName,password,confirmPassword,profileImage,paymentSlip} = this.state;

        const data ={
            stuName:stuName,
            address:address,
            birthDay:birthDay,
            gender:gender,
            email:email,
            phone:phone,
            school:school,
            stream:stream,
            guardianName:guardianName,
            admissionFees:admissionFees,
            rdate:rdate,
            userName:userName,
            password:password,
            confirmPassword:confirmPassword,
            profileImage:profileImage,
            paymentSlip:paymentSlip,
        }
        console.log(data);

        axios.post("http://localhost:8091/onlineStudent/onlineAdd",data).then((res) =>{
            console.log(res)
            if(res.data.success){
                alert("Student Added Successfully")
                this.props.history.push('/homeNewStudent')
            this.setState(
                this.state={
                    "stuName":"",
                    "address":"",
                    "birthDay":"",
                    "gender":"",
                    "email":"",
                    "phone":"",
                    "school":"",
                    "stream":"",
                    "guardianName":"",
                    "admissionFees":"",
                    "rdate":"",
                    "userName":"",
                    "password":"",
                    "confirmPassword":"",
                    "profileImage":"",
                    "paymentSlip":""
                },
                localStorage.setItem('name', stuName),
                localStorage.setItem('address', address),
                localStorage.setItem('birthDay', birthDay),
                localStorage.setItem('gender', gender),
                localStorage.setItem('email', email),
                localStorage.setItem('phone', phone),
                localStorage.setItem('school', school),
                localStorage.setItem('stream', stream),
                localStorage.setItem('guardianName', guardianName),
                localStorage.setItem('rdate', rdate),
                localStorage.setItem('userName', userName),
                localStorage.setItem('Image', profileImage),
                localStorage.setItem('name', stuName),
                localStorage.setItem('name', stuName),

                localStorage.setItem('password', password)
            )
            }else{
                alert("Error ocoured in entered detail.Please enter detils again.")
            }
            
        });
    }
}


//reset the form
    resetForm = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            stuName:'',
            address:'',
            birthDay:'',
            gender:'',
            email:'',
            phone:'',
            school:'',
            stream:'',
            guardianName:'',
            admissionFees:'',
            rdate:'',
            userName:'',
            password:'',
            confirmPassword:'',
            profileImage:'',
            paymentSlip:''
    
        })
     }

     onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }


      //form validation

      validate =()=>{
        let emailError="";
        let nameError="";
        let phoneError="";
        let passwordError="";
        let confirmPasswordError="";
        let userNameError="";
        let addressError ="";
        let birthDayError ="";
        let genderError ="";
        let schoolError ="";
        let guardianNameError ="";
        let rdateError = "";
        let admissionfeesError = "";
        let paymentSlipError ="";
        
        if(!this.state.stuName){
            nameError="Name Cannot Be Empty"
        }
        if(!this.state.email){
            emailError="Email Cannot Be Empty"
        }else if(!this.state.email.includes("@")){
            emailError="Invalid Email";
        }

        let pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(this.state.phone.length>10 || this.state.phone.length<10 || !this.state.phone.match(pattern)){
        phoneError="Invalid Phone Number";
        }
        
        if(!this.state.userName){
            userNameError="User Name Cannot Be Empty"
        }

        if(!this.state.password){
            passwordError="Password Cannot Be Empty"
        }

        if(!this.state.confirmPassword){
            confirmPasswordError="Confirm Password Cannot Be Empty"
        }

        if(this.state.confirmPassword != this.state.password){
            confirmPasswordError="Passwords are not match. Please enter correct password."
        }

        if(this.state.password.length<8){
            passwordError="Invalid password, Password should contain more than 8 charactors";
        }

        if(!this.state.address){
            addressError="Address Cannot Be Empty"
        }

        if(!this.state.birthDay){
            birthDayError="Birth Day Cannot Be Empty"
        }

        if(!this.state.gender){
            genderError="Gender Cannot Be Empty"
        }

        if(!this.state.school){
            schoolError="School Cannot Be Empty"
        }

        if(!this.state.guardianName){
            guardianNameError="Guardian name Cannot Be Empty"
        }

        
        if(!this.state.rdate){
            rdateError="Register Date Cannot Be Empty"
        }

        if(!this.state.admissionFees){
            admissionfeesError ="Admission Fees Cannot Be Empty"
        }

        if(!this.state.paymentSlip){
            paymentSlipError ="PAyment Slip Cannot Be Empty Please Upload Photo"
        }



        if(emailError || nameError || addressError || birthDayError || genderError || phoneError || schoolError|| guardianNameError || rdateError || admissionfeesError || paymentSlipError ||  passwordError || confirmPasswordError || userNameError){
        this.setState({emailError,nameError,addressError, birthDayError , genderError , phoneError,schoolError,guardianNameError , rdateError ,admissionfeesError, paymentSlipError, passwordError,confirmPasswordError,userNameError});
        return false;
        }
        
        return true;
        };


        // handleFormSubmit = () => {
        //     const { stuName, password } = this.state;
        //     localStorage.setItem('name', stuName);
        //     localStorage.setItem('password', password);
        //   };


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
  {/* <input type="text" className="form-control" id="rType" style={{"display":"none"}}
    name="rType" 
    defaultValue={this.state.rType}
    value={this.state.rType} 
    onChange={this.handlInputChange}/> */}
    

    <h1>Register Student</h1>
    <p>Please fill in this form to create an account and register to our Amzo Learning</p>
    <hr/>

    <label for="stuName" ><b>Name</b></label> <br></br>
    <input type="text"  id="stuName" 
    name="stuName" 
    placeholder="First Name Last Name" 
    value={this.state.stuName} 
    onChange={this.handleInputChange}
    />
    {this.state.nameError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
    ):null}
 <br></br>
   <label for="address" ><b>Adress</b></label> <br></br>
    <input type="text" id="address"
    name="address" 
     placeholder="Enter Address"
     value={this.state.address} 
    onChange={this.handleInputChange}
    />
    {this.state.addressError?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.addressError}</div>
):null}



<label for= "birthDay" ><b>Birth Day</b></label>
    <input type="date"
    name="birthDay"
    id="birthDay"
    placeholder="Enter Your Birth Day"
    value={this.state.birthDay}
    onChange={this.handleInputChange} />
   {this.state.birthDayError?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.birthDayError}</div>
):null}

{/* <label for="gender" className="form-label"><b>Gender</b></label>
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
):null} */}

<label  for="gender" ><b>Gender</b></label>
    <div onChange={this.handleInputChange}>
        <input type="radio" value="MALE" name="gender"/> Male  &nbsp;&nbsp;&nbsp;
        <input type="radio" value="FEMALE" name="gender"/> Female
    </div> 
    {this.state.genderError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.genderError}</div>
):null} 

<br></br>
<label for="email" ><b>Email</b></label>
<input type="text"  id="email"
name="email" 
 placeholder="xxxx@gmail.com" 
 value={this.state.email} 
onChange={this.handleInputChange}
/>
{this.state.emailError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
):null}

<label  for="phone" className="form-lable" style={{marginBottom:'5px'}}>Phone</label>
    <input type="text"
        id="phone"
        name="phone"
        placeholder="xxx xxx xx xx"
        value={this.state.phone}
        onChange={this.handleInputChange} required>
        </input>
        {this.state.phoneError ?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.phoneError}</div>
                        ):null}

         <label  for="school"><b>School</b></label>
            <input type="text"
                name="school"
                id="school"
                placeholder="Enter School Name"
                value={this.state.school}
                onChange={this.handleInputChange} required>
            </input>
            {this.state. schoolError ?(
            <div style={{color:"red",fontWeight:"bold"}} >{this.state.schoolError}</div>
            ):null}
                            
                       <label  for="stream" ><b>A/L Stream</b><br></br>
                        <select  name="stream" value={this.state.stream} onChange={this.handleInputChange}>
                            <option value="Select your A/L stream">&nbsp;&nbsp;&nbsp;--Select your A/L stream--&nbsp;&nbsp;&nbsp;</option>
                            <option value="Biology">&nbsp;  Biology</option>
                            <option value="Mathematics">&nbsp;  Mathematics</option>
                            <option value="commerce">&nbsp;  Commerce</option>
                            <option value="Art">&nbsp; Art</option>
                            <option value="Technology">&nbsp; Technology</option>
                        </select>
                        </label>
<br></br>
                        
                        <label  for="guardianName"><b>Guardian Name</b></label>
                            <input type="text"
                                id="guardianName"
                                name="guardianName"
                                placeholder="Enter Guardian Name"
                                value={this.state.guardianName}
                                onChange={this.handleInputChange} >
                            </input>
                            {this.state.guardianNameError ?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.guardianNameError}</div>
                        ):null}

                            <label for= "rdate"><b>Registation Date</b></label>
                            <input type="date"
                               
                                id="rdate"
                                name="rdate"
                                placeholder="Enter Register Date"
                                value={this.state.rdate}
                                onChange={this.handleInputChange} >
                            </input>
                            {this.state.rdateError ?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.rdateError}</div>
                        ):null}



                            <label  for="admissionFees"><b>Admission Fees</b></label><br></br>
                            <input type="number"
                                id="admissionFees"
                                name="admissionFees"
                                placeholder="Enter Admission Fees"
                                value={this.state.admissionFees}
                                onChange={this.handleInputChange} 
                                style={{width:"100%", height:"50px"}}>
                            </input>
                            {this.state.admissionfeesError ?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.admissionfeesError}</div>
                        ):null}
                       <br></br><br></br>
                            <label  for="fromFile"><b>Payment Slip</b></label>
                            <input type="file"
                               
                                name="paymentSlip"
                                id="paymentSlip"
                                // placeholder="Input your profile image"
                                // value={this.state.profileImage}
                                onChange={this.onChangeFile2} >
                            </input>
                            {this.state.paymentSlipError?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.paymentSlipError}</div>
                        ):null}

                            <hr></hr>
                            <h4><i><b>Create Student Account</b></i></h4>

                            <label for="userName"><b>User Name</b></label>
                            <input type="text"
                              
                                name="userName"
                                placeholder="Enter User Name"
                                value={this.state.userName}
                                onChange={this.handleInputChange} >
                            </input>
                            {this.state.userNameError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.userNameError}</div>
                            ):null}

                            <label  for="fromFile"><b>Profile Image</b></label>
                            <input type="file"
                                name="profileImage"
                                id="profileImage"
                                // placeholder="Input your profile image"
                                // value={this.state.profileImage}
                                onChange={this.onChangeFile} 
                                required>
                            </input>

                            <label  for="password"><b>Password</b></label>
                            <input type="password"
                                
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleInputChange} >
                            </input>
                            {this.state.passwordError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.passwordError}</div>
                            ):null}

                            <label  for="confirmPassword" ><b>Confirm Password</b></label>
                            <input type="password"
                                
                                name="confirmPassword"
                                placeholder="Re enter password"
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange} >
                            </input>
                            {this.state.confirmPasswordError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.confirmPasswordError}</div>
                            ):null}
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms & Privacy</a>.</p>


<button  type="submit" className="btn btn-danger" onClick={this.resetForm} style={{width:"40%", height:"50px"}}> Reset</button> &nbsp;

 <button  type="submit"   className="btn btn-success" onClick={this.onSubmit} style={{width:"40%", height:"50px"}}> Submit</button>&nbsp;
 <h6 >Already do you register the class, you can <a href="/studentLogin"> Signup</a></h6>
</div>

      
      {/* <button className="cancelbtn" onChange={this.reset} >Reset</button>
  <button type="submit" className="signupbtn" onClick={this.onSubmit} >Submit</button> */}



</form>
    </div>







<br></br>
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