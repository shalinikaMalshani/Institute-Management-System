import React,{Component} from "react";
import axios from "axios";

const options = [
    {
        label: "Select the teacher",
        value: "0.00",
      },
    {
      label: "Mr.Kapila (Biology)",
      value: "1000.00",
    },
    {
      label: "Mr.Amal (C.Maths)",
      value: "1200.00",
    },
    {
      label: "Mr.Perera (Sinhala)",
      value: "1500.00",
    },
    {
      label: "Ms.Samanthi (BTEC)",
      value: "1100.00",
    },
    {
        label: "Ms.Kasuni (Accounting)",
        value: "1300.00",
      },
  ];

  const options2 = [
    {
        label: "Select the teacher",
        value: "0.00",
    },
    {
      label: "Ms.Thakshila (Art)",
      value: "1000.00",
    },
    {
      label: "Mr.Prasad (Physics)",
      value: "1200.00",
    },
    {
      label: "Mr.Rasika (IT)",
      value: "1500.00",
    },
    {
      label: "Ms.Jeewani (Bussiness Stu.)",
      value: "1100.00",
    },
  ]; 

  const options3 = [
    {
        label: "Select the teacher",
        value: "0.00",
      },
    {
      label: "Mr.Nilantha(Bhudhism)",
      value: "1000.00",
    },
    {
      label: "Ms.Muditha (Chemistry)",
      value: "1200.00",
    },
    {
      label: "Ms.Lalitha (Static)",
      value: "1500.00",
    },
    {
      label: "Mr.Vipula (BioTec)",
      value: "1100.00",
    },
  ];

  const options4 = [
    {
        label: "Select the teacher",
        value: "0.00",
    },
    {
      label: "Mr.Silva (English)",
      value: "1000.00",
    },
    {
      label: "Mr.Dinuth (Dancing)",
      value: "1200.00",
    },
    {
      label: "Ms.Nadeesha (Bs)" ,
      value: "1500.00",
    },
    {
      label: "Ms.Dewni (Lit.)",
      value: "1600.00",
    },
  ];

export default class EnrolledSubject extends Component{
    constructor(props) {
        super(props);
        this.state = {
        "teacher": "",
        "teacher3": "",
        "teacher4": "",
        "stuName":"",
        "email":"",
        "stream":"",
        "rdate":"",
        "teacher2":"",
        "amount":"",
        "total":"",
        "subject1":"",
        "subject2":"",
        "subject3":"",
        "subject4":"",
        "paymentSlip":""

        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChanger = this.handleInputChanger.bind(this);
        this.handleInputChangerr = this.handleInputChangerr.bind(this);
        this.handleInputChangerr2 = this.handleInputChangerr2.bind(this);
      }


    state={
        subject1:[],
        subject2:[],
        subject3:[],
        subject4:[],
        teacher:[],
        fees:[],
        total:[]
        // formValues:[{subjects:"", teacher:"", fees:""}]
    } 

    addSubject(){
        this.setState({subject1:[...this.state.subject1,""]})
        this.setState({subject2:[...this.state.subject2,""]})
        this.setState({subject3:[...this.state.subject3,""]})
        this.setState({subject4:[...this.state.subject4,""]})
        this.setState({teacher:[...this.state.teacher,""]})
        this.setState({fees:[...this.state.fees,""]})
        this.setState({total:[...this.state.total(),""]})
        
        // this.setState({formValues:[...this.formValues,{subjects:"", teacher:"", fees:""}]})
    }

    handlechange(e,index){
        // this.state.formValues[index]= e.target.value
        // this.setState({subjects:this.state. formValues=[{subjects:"", teacher:"", fees:""}]})

        this.state.subject1[index]= e.target.value
        this.setState({teacher:this.state.subject1})
        this.state.subject2[index]= e.target.value
        this.setState({teacher:this.state.subject2})
        this.state.subject3[index]= e.target.value
        this.setState({teacher:this.state.subject3})
        this.state.subject4[index]= e.target.value
        this.setState({teacher:this.state.subject4})

        this.state.teacher[index]= e.target.value
        this.setState({teacher:this.state.teacher})

        this.state.fees[index]= e.target.value
        this.setState({fees:this.state.fees})

        this.state.total[index]= e.target.value
        this.setState({fees:this.state.fees})

    }

    handleRemove(index){
        this.state.subjects.splice(index,1)
        console.log(this.state.subjects,"$$$$");
        this.state.teacher.splice(index,1)
        console.log(this.state.teacher,"$$$$");
        this.state.fees.splice(index,1)
        console.log(this.state.fees,"$$$$");
        console.log(this.state.total,"$$$$");

        //update the state
        this.setState({subject1:this.state.subject1})
        this.setState({subject2:this.state.subject2})
        this.setState({subject3:this.state.subject3})
        this.setState({subject4:this.state.subject4})
        this.setState({teacher:this.state.teacher})
        this.setState({fees:this.state.fees})
        this.setState({total:this.state.fees})
    }


    // handleSubmit(e){
    //     alert("Subject registation & payment success");
    //     console.log(this.state,"$$$$")
    //     console.log(this.state,"total")
    // }

//Submit the form
handleSubmit = (e)=>{
    e.preventDefault();
    //  const{stuName,email,stream,rdate} = this.state;
    const{stuName,subject1,subject2,subject3,subject4,teacher,
      teacher2,teacher3,teacher4,total,amount,email,stream,rdate,paymentSlip} = this.state;

    const data ={
        stuName:stuName,
        email:email,
        stream:stream,
        rdate:rdate,
        subject1:subject1,
        subject2:subject2,
        subject3:subject3,
        subject4:subject4,
        teacher:teacher,
        teacher2:teacher2,
        teacher3:teacher3,
        teacher4:teacher4,
        options:subject1,
        options2:subject2,
        // fees1,
        // fees2,
        // fees3,
        // fees4,
        // fees5,
        // fees6,
        fees:total,
        amount:amount,
        paymentSlip:paymentSlip,
    }
   
    console.log(data);
    console.log(this.state,"$$$$")
    console.log(this.state,"total")
    // alert("Subject registation & payment success");

    axios.post("http://localhost:8091/onlinePayment/addOnlinePayment",data).then((res) =>{
      if(res.data.success){
          alert("Payment Added Successfully")
          this.props.history.push("/homeStudent");
      this.setState(
          this.state={
            "stuName":"",
            "email":"",
            "stream":"",
            "rdate":"",
            "subject1":"",
            "subject2":"",
            "subject3":"",
            "subject4":"",
            "options2":"",
            "teacher":"",
            "teacher2":"",
            "teacher3":"",
            "teacher4":"",
            "amount":"",
            "fees":"",
            "paymentSlip":""
          }
      )
      }else{
          alert("Error ocoured in entered detail.Please enter detils again.")
      }
      
  });
}



    total(){
        var sum = 0;
        var total = sum + parseInt(this.state.teacher)+parseInt(this.state.teacher2)+parseInt(this.state.teacher3)+parseInt(this.state.teacher4)
        return total

    }

    handleInputChange(e) {
        console.log("teacher Selected!!");
        this.setState({ teacher: e.target.value });
        // this.setState({ teacher2: e.target.value2 });
        // this.setState({ teacher3: e.target.value3 });
        // this.setState({ teacher4: e.target.value });
      }

      handleInputChanger(e) {
        console.log("teacher Selected!!");
        // this.setState({ teacher: e.target.value });
        // this.setState({ teacher2: e.target.value2 });
        // this.setState({ teacher3: e.target.value3 });
        this.setState({ teacher4: e.target.value });
      }

      handleInputChangerr(e) {
        console.log("teacher Selected!!");
        // this.setState({ teacher: e.target.value });
        // this.setState({ teacher2: e.target.value2 });
        // this.setState({ teacher3: e.target.value3 });
        this.setState({ teacher3: e.target.value });
      }

      handleInputChangerr2(e) {
        console.log("teacher Selected!!");
        // this.setState({ teacher: e.target.value });
        // this.setState({ teacher2: e.target.value2 });
        // this.setState({ teacher3: e.target.value3 });
        this.setState({ teacher2: e.target.value });
      }


      //reset the form
    resetForm = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            stuName:"",
            email:"",
            stream:"",
            rdate:"",
            // option:"",
            // options2:"",
            teacher:"",
            teacher2:"",
            teacher3:"",
            teacher4:"",
            amount:"",
            fees:"",
            subject1:"",
            subject2:"",
            subject3:"",
            subject4:"",
            paymentSlip:""
            
        })
     }


      //form validation

      validate =()=>{
        let emailError="";
        let nameError="";
        let dateError=""
        
        if(!this.state.stuName){
            nameError="Name Cannot Be Empty"
        }
        if(!this.state.email){
            emailError="Email Cannot Be Empty"
        }else if(!this.state.email.includes("@")){
            emailError="Invalid Email";
        }
        // let pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        // if(this.state.rdate>date ){
        // phoneError="Invalid date";
        // }
        
        
        if(emailError || nameError ){
        this.setState({emailError,nameError});
        return false;
        }
        
        return true;
        };

        handleInputChange1 = (e) =>{
          const {name,value} = e.target;
          
          this.setState({
              ...this.state,
              [name]:value
          })
  
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
                  <img src="asset/images/banner/classBanner.jpg" alt="Sky" className="rev-slidebg"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" data-no-retina style={{height:"", width:"100%"}}/>
                  <div style={{position:"absolute", left:"50px", bottom:"100px",color:"white"}}><h1><b> Enrolled Subject </b></h1></div>
                </div> 
        
      </div>
  </div>
   
</header> 
            <div className="container" style={{padding:"40px",marginLeft:"200px",width:"76%", backgroundImage:"class.jpg" }} > 
                <br></br><br></br>
                <h4>Enrolled Subjects & Payment</h4>
                <br></br>

                <div className="row">   
                <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                        <label for="stuName"  id="stuName" className="form-lable" style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                                className="form-control"
                                name="stuName"
                                id="stuName"
                                placeholder="Enter Student Name"
                                value={this.state.stuName}
                                onChange={this.handleInputChange1} require>
                            </input>
                            {/* {this.state.nameError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
                            ):null} */}
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-6">

                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-at"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="email" className="form-lable" style={{marginBottom:'5px'}}>Email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleInputChange1} required>
                            </input>
                            {/* {this.state.emailError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
                            ):null}
                             */}
                    </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <label  for="stream" >
                    <i class="fa-solid fa-list"></i>&nbsp;&nbsp;&nbsp;
                        A/L Stream<br></br>
                        <select  name="stream" value={this.state.stream} onChange={this.handleInputChange1}>
                            <option value="Select your A/L stream">&nbsp;&nbsp;--Select your A/L stream--</option>
                            <option value="Biology"> Biology</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Art">Art</option>
                        </select>
                        </label>
                </div>
                </div>
                    <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-calendar"></i>&nbsp;&nbsp;&nbsp;
                        <label for= "rdate" className = "form-lable" style={{marginBottom:'5px'}}>Registation Date</label>
                            <input type="date"
                                className="form-control"
                                id="rdate"
                                name="rdate"
                                placeholder="Enter Register Date"
                                value={this.state.rdate}
                                onChange={this.handleInputChange1} required>
                            </input>
                          
                        
                    </div>
                    </div>

                   
                </div>

               <br></br>
                <div className="row">
                    <br></br>
                    <div className="col-lg-3">

                    <label for="subject1" className="form-lable" style={{marginBottom:'5px'}}>
                    <i class="fa-solid fa-list"></i>&nbsp;&nbsp;&nbsp;Subjects</label>
                    {/* {
                    this.state.subjects.map((subjects,index)=>{ */}
                        {/* return( */}
                            {/* <div  key={index}> */}
                            <select  name="subject1" id="subject1"   onChange={this.handleInputChange1} >
                                <option value={"None"}>&nbsp;Select the subject 1</option>
                                <option value={'Biology'}>&nbsp;  Biology</option>
                                <option value={'Mathematics'}>&nbsp;  Mathematics</option>
                                <option value={'Commerce'}>&nbsp;Accounting</option>
                                <option value={"Art"}>&nbsp;Sinhala</option>
                                <option value={"Technology"}>&nbsp;BTEC</option>
                            </select>

                            
                            {/* <div key={index}>
                                <input value={subjects}
                                placeholder={"Subject" + (index+1)}></input>
                                </div> */}
                            {/* </div>
                        ) */}
                    {/* })
                } */}
                </div>
                
                <div className="col-lg-3">
                    <label className="form-lable" style={{marginBottom:'5px'}}>
                    <i class="fa-solid fa-person-chalkboard"></i>&nbsp;&nbsp;&nbsp;   Teacher's Name</label><br></br>
                <select value={this.state.teacher} onChange={this.handleInputChange} >
                                        {options.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                        </select>
               
                </div>
              
                 <div className="col-lg-3 ">
                 <label className="form-lable" style={{marginBottom:'5px'}}>
                 <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp;&nbsp;  Class Fees (Rs.)</label><br></br>
                 <select for="fees1" value={this.state.teacher} onChange={this.handleInputChange}  >
                 {options.map((option) => (
                <option value={option.lable}>{option.value}</option>
              ))}
            </select>
          </div>
          </div>
        <br></br>
          <div className="row">
                    <br></br>
                    <div className="col-lg-3">
                    {/* <label>Subject</label> */}
                    {/* {
                    this.state.subjects.map((subjects,index)=>{ */}
                        {/* return( */}
                            {/* <div  key={index}> */}
                            <select  name="subject2"  for="subject2" onChange={this.handleInputChange1}>
                                <option value={"None"}>&nbsp;Select the subject 2</option>
                                <option value={'Art'}>&nbsp;Art</option>
                                <option value={'Physics'}>&nbsp;Physics</option>
                                <option value={'IT'}>&nbsp;  IT</option>
                                <option value={"Bussiness Stu"}>&nbsp; Bussiness Stu.</option>
                            </select>

                            
                            {/* <div key={index}>
                                <input value={subjects}
                                placeholder={"Subject" + (index+1)}></input>
                                </div> */}
                            {/* </div>
                        ) */}
                    {/* })
                } */}
                </div>
                
                <div className="col-lg-3">
                    {/* <label>Teacher's Name</label><br></br> */}
                <select value={this.state.teacher2} onChange={this.handleInputChangerr2} >
                                        {options2.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                        </select>
               
                </div>
              
                 <div className="col-lg-3 ">
                 {/* <label>Class Fees</label><br></br> */}
                 <select for="fees2" value={this.state.teacher2} onChange={this.handleInputChangerr2}>
                 {options2.map((option) => (
                <option value={option.lable}>{option.value}</option>
              ))}
            </select>
          </div>
          </div>

        <br></br>

          <div className="row">
                    <br></br>
                    <div className="col-lg-3">
                    {/* <label>Subject</label> */}
                    {/* {
                    this.state.subjects.map((subjects,index)=>{ */}
                        {/* return( */}
                            {/* <div  key={index}> */}
                            <select  name="subject3" for="subject3"  onChange={this.handleInputChange1} >
                                <option value={"None"}>&nbsp;Select the subject 3</option>
                                <option value={'Bhudhism'}>&nbsp;  Bhudhism</option>
                                <option value={'Chemistry'}>&nbsp;Chemistry</option>
                                <option value={'Static'}>&nbsp; Static </option>
                                <option value={"BioTec"}>&nbsp; BioTec</option>
                            </select>

                            
                            {/* <div key={index}>
                                <input value={subjects}
                                placeholder={"Subject" + (index+1)}></input>
                                </div> */}
                            {/* </div>
                        ) */}
                    {/* })
                } */}
                </div>
                
                <div className="col-lg-3">
                    {/* <label>Teacher's Name</label><br></br> */}
                <select value={this.state.teacher3} onChange={this.handleInputChangerr}>
                                        {options3.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                        </select>
               
                </div>
              
                 <div className="col-lg-3 ">
                 {/* <label>Class Fees</label><br></br> */}
                 <select for="fees3" value={this.state.teacher3} onChange={this.handleInputChangerr} >
                 {options3.map((option) => (
                <option value={option.lable}>{option.value}</option>
              ))}
            </select>
          </div>
          </div>

          <br></br>

          <div className="row">
                    <br></br>
                    <div className="col-lg-3">
                    {/* <label>Subject</label> */}
                    {/* {
                    this.state.subjects.map((subjects,index)=>{ */}
                        {/* return( */}
                            {/* <div  key={index}> */}
                            <select  name="subject4"  for="subject4" onChange={this.handleInputChange1}>
                                <option value={"None"}>&nbsp;Select the subject 4</option>
                                <option value={'English'}>&nbsp;  English</option>
                                <option value={'Dancing'}>&nbsp;  Dancing</option>
                                <option value={'Bs'}>&nbsp;  Bs</option>
                                <option value={"Lit"}>&nbsp; Lit</option>
                            </select>

                            
                            {/* <div key={index}>
                                <input value={subjects}
                                placeholder={"Subject" + (index+1)}></input>
                                </div> */}
                            {/* </div>
                        ) */}
                    {/* })
                } */}
                </div>
                
                <div className="col-lg-3">
                    {/* <label>Teacher's Name</label><br></br> */}
                <select value={this.state.teacher4} onChange={this.handleInputChanger}  >
                                        {options4.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                        </select>
               
                </div>
              
                 <div className="col-lg-3 ">
                 {/* <label>Class Fees</label><br></br> */}
                 <select for="fees4" value={this.state.teacher4} onChange={this.handleInputChanger}  >
                 {options4.map((option) => (
                <option value={option.lable}>{option.value}</option>
              ))}
            </select>
</div>
<div className="row">  
            <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%", marginTop:"30px"}}>&nbsp;
                    <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp;&nbsp;
                        <label for="total" className="form-lable" style={{marginBottom:'5px'}}>Total Class Fees (Rs.)</label>
                            <input type="number"
                                className="form-control"
                                name="total"
                                placeholder="Total Class Fees"
                                onChange={this.handleInputChange}
                                value={this.total()}
                                style={{width:"250px"}}
                                readOnly>
                            </input>
                            </div>
                            </div>


          
          
          
                <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%",marginTop:"30px"}}>&nbsp;
                    <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp;&nbsp;
                        <label for="amount" className="form-lable">Payment Amount (Rs.)</label>
                            <input type="number"
                                className="form-control"
                                name="amount"
                                placeholder="Enter Total Amount"
                                value={this.state.amount}
                                onChange={this.handleInputChange1} 
                                style={{width:"250px"}}
                                require>
                            </input>
                        
                        
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%",height:"90px", marginLeft:"-20px"}}>&nbsp;
                    <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="fromFile" className="form-lable">Payment Slip </label>
                            <input type="file"
                                className="form-control"
                                name="paymentSlip"
                                id="paymentSlip"
                                // placeholder="Input your profile image"
                                // value={this.state.profileImage}
                                onChange={this.onChangeFile2} 
                                style={{height:"50px"}}
                                required>
                            </input>
                        </div>
                    </div>
          

                  
      
                {/* <button className="btn btn-danger col-lg-2 " style={{marginLeft:"700px",marginTop:"-38px",height:"38px"}} onClick={() => this.handleRemove() }>Remove</button> */}
               
            {/* </div> */}
            
                {/* <hr></hr> */}
                {/* <button className="btn btn-success col-lg-2" onClick={(e) => this.addSubject(e)}>Add Subject</button> */}
                {/* <hr></hr> */}

                <button className="btn btn-danger" type="submit" style={{marginTop:'15px', width:"200px", marginTop:"70px"}} onClick={this.resetForm}>
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                    &nbsp; Reset
                    </button> &nbsp;

                <button className="btn btn-success col-lg-2" onClick={(e) => this. handleSubmit(e) } style={{marginTop:'70px', width:"290px"}}>
                <i className="far fa-check-square"></i>&nbsp;&nbsp;Submit</button>
<br></br>
<br></br>
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