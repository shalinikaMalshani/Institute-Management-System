import React from "react";
import axios from "axios";
import "./customSignUP.css";


const initialState={
    subject:"",
    lessonNo:"",
    lessonNote:"",
    tute:"",
    stuTuteAnswers:"",
    tuteAnswers:"",
    referances:"",
    subjectError:"",
    lessonNoError:"",
    lessonNoteError:"",
    tuteError:"",
    stuTuteAnswersError:"",
    tuteAnswersError:"",
    referancesError:""

}

export default class addLesson extends React.Component{
    constructor(props){
        super(props);

        this.state={alertMsg:"",initialState};
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







onChangeFile1=e=>{
    
    this.setState({
        lessonNote:e.target.files[0].name
       

    })
}

onChangeFile2=e=>{
    
    this.setState({
        tute:e.target.files[0].name
       

    })
}

onChangeFile4=e=>{
    
    this.setState({
        tuteAnswers:e.target.files[0].name,
       

    })
}




validate =()=>{

    let subjectError="";
 let lessonNoError="";
 let lessonNoteError="";
 let  tuteError="";
 let stuTuteAnswersError="";
 let tuteAnswersError="";
 let  referancesError="";

 if(!this.state.subject){
    subjectError="Subject Cannot Be Empty"
}



if(!this.state.lessonNo){
    lessonNoError="Lesson No Cannot Be Empty"
}

if(!this.state.lessonNote){
    lessonNoteError="Notes Cannot Be Empty"
}

if(!this.state.tute){
    tuteError="Tute Cannot Be Empty"
}

if(!this.state.stuTuteAnswers){
    stuTuteAnswersError="Answer Link Cannot Be Empty"
}





if(!this.state.referances){
    referancesError="Referances Cannot Be Empty"
}


if(lessonNoError || lessonNoteError || tuteError || stuTuteAnswersError|| referancesError ){
this.setState({lessonNoError,lessonNoteError,tuteError,stuTuteAnswersError,referancesError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {subject,lessonNo,lessonNote,tute,stuTuteAnswers,tuteAnswers , referances}=this.state;
        const data={
            subject:subject,
            lessonNo:lessonNo,
            lessonNote:lessonNote,
            tute:tute,
            stuTuteAnswers:stuTuteAnswers,
            tuteAnswers:tuteAnswers,
            referances: referances
           
           
        }
    
        
    
        axios.post("http://localhost:8091/addLesson",data).then((res)=>{
          alert("Teacher lesson added successfully!");
          console.log("data",data);
          this.setState(initialState);
            this.props.history.push("/");
        }).catch(error=>{
            alert("Error occoured.Please check and resubmit the details.");
        })
    
    }
}

reset() {
    this.setState({subject:"",
    lessonNo:"",
    lessonNote:"",
    tute:"",
    stuTuteAnswers:"",
    tuteAnswers:"",
    referances:"",
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
                        <h1>Lessons</h1>
                        <div class="pages_links">
                            <a href="#" title="">Home</a>
                            <a href="#" title="" class="active">Lessons</a>
                        </div>
                    </div>
                </div>              

            </div>
        </div> 
    </div> 
</header> 

<div>
<form>

<div class="container">  
<label for="subject" >Subject</label>
<select onChange={this.onChangeSelect} name="subject" id="subject">
        <option selected disabled >--Select Subject--</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>

        {this.state.subjectError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.subjectError}</div>
):null}

</select>
         
   
   
   

  

    <label for="name">Lesson No</label>
    <input type="text" id="lessonNo" 
    name="lessonNo" 
    placeholder="Lesson No" 
    value={this.state.lessonNo} 
    onChange={this.handlInputChange}/>
    {this.state.lessonNoError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.lessonNoError}</div>
):null}
  
    <label for="age" >Lesson Notes</label>
    <input type="file" id="lessonNote"
    name="lessonNote" 
  onChange={this.onChangeFile1}
    />
     {this.state.lessonNoteError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.lessonNoteError}</div>
):null}
   
<label for="qualification" >Tute</label>
<input type="file"  id="tute" 
name="tute" 
onChange={this.onChangeFile2}
/>
{this.state.tuteError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.tuteError}</div>
):null}

<label for="mobile" className="form-label">Tute Answer Upload Link</label>
<input type="text"  id="stuTuteAnswers"
name="stuTuteAnswers" 
value={this.state.stuTuteAnswers}
onChange={this.handlInputChange}
/>
{this.state.stuTuteAnswersError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.stuTuteAnswers}</div>
):null}





<label for="subject" >Tute Answers</label>
<input type="file" id="tuteAnswers"
name="tuteAnswers" 
onChange={this.onChangeFile4}
 
/>
        
<label for="date" >Referances</label>
<input type="text"  id="referances"
name="referances" 
value={this.state.referances}
onChange={this.handlInputChange}
/>
{this.state.referancesError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.referancesError}</div>
):null}





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