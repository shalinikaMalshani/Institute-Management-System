import React,{Component} from "react";
import axios from "axios";
import swal from "sweetalert";

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

export default class updateMySubjects extends Component{
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
    const id = this.props.match.params.id; 
    //  const{stuName,email,stream,rdate} = this.state;
    const{stuName,subject1,subject2,subject3,subject4,teacher,
      teacher2,teacher3,teacher4,total,amount,email,stream,rdate} = this.state;

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
        amount:amount
    }
   
    console.log(data);
    console.log(this.state,"$$$$")
    console.log(this.state,"total")
    localStorage.setItem("subject1",this.state.subject1);
    localStorage.setItem("subject2",this.state.subject2);
    localStorage.setItem("subject3",this.state.subject3);
    localStorage.setItem("subject4",this.state.subject4);
    // alert("Subject registation & payment success");

    axios.put(`http://localhost:8091/onlinePayment/updateOnlinePayment/${id}`,data).then((res) =>{
      if(res.data.success){
        swal({
          title: "Update Success",
          text: "You have new subject list",
          icon: "success",
          buttons: true,
          dangerMode: true,
        }).then(function() {
          window.location = "/mySubject";
      });
          // alert("Payment Update Successfully")
          // this.props.history.push("/allSubjects");
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
            "fees":""
          }
      )
      }else{
          alert("Error ocoured in entered detail.Please enter detils again.")
      }
      
  });
}

componentDidMount(){
    const id = this.props.match.params.id; 

    axios.get(`http://localhost:8091/onlinePayment/getOnlinePayment/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                stuName:res.data.onlinePayment.stuName,
                // address:res.data.students.address,
                // birthDay:res.data.students.birthDay,
                // gender:res.data.students.gender,
                email:res.data.onlinePayment.email,
                stream:res.data.onlinePayment.stream,
                subject1:res.data.onlinePayment.subject1,
                subject2:res.data.onlinePayment.subject2,
                subject3:res.data.onlinePayment.subject3,
                subject4:res.data.onlinePayment.subject4,
                teacher:res.data.onlinePayment.teacher,
                teacher2:res.data.onlinePayment.teacher2,
                teacher3:res.data.onlinePayment.teacher3,
                teacher4:res.data.onlinePayment.teacher4,
                
                rdate:res.data.onlinePayment.rdate


            });

            console.log(res.data.onlinePayment);
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
            subject4:""
            
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




   render(){
        return(
          
         
                      
                 <div>
                     
                     {/* <div style={{position:"absolute", left:"50px", bottom:"100px",color:"white"}}><h1><b> My Enrolled Subject </b></h1></div> */}
                 {/* <h1>Enrolled Subject Update</h1> */}
           
                        <img src={require("./classBanner3.jpg")} style={{width:"100%", height:"300px"}}></img>
   
      
            <div className="container" style={{padding:"40px",marginLeft:"200px",width:"76%",outlineStyle:"inset", marginBottom:"100px",marginTop:"60px"}}>
                  {/* <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'40px', width:'110px', marginTop:"-10px"}}>
                <a href="/" style={{textDecoration:'none', color:'white',display:'flex'}}>&nbsp;<i class="fa-solid fa-angles-left"
                style={{marginTop:'5px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>
                </button> */}
                <br></br><br></br>
                <div style={{ background:"rgb(107 104 164 / 32%)", outlineStyle:"inset", marginTop:"-50px", width:"50%", height:"60px", marginLeft:"200px", paddingLeft:"100px", paddingBottom:"20px", paddingTop:"20px"}}>
                <h4>Update Enrolled Subject</h4>
                </div>
                <br></br>

                <div className="row">   
                <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                   
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
                    <label  for="stream" className="form-lable" style={{marginTop:"0px"}}>
                   
                        A/L Stream<br></br>
                        <select  name="stream" value={this.state.stream} onChange={this.handleInputChange1} >
                            <option value="Select your A/L stream">&nbsp;&nbsp;&nbsp;--Select your A/L stream--</option>
                            <option value="Biology">&nbsp;  Biology</option>
                            <option value="Mathematics">&nbsp;  Mathematics</option>
                            <option value="Commerce">&nbsp;  Commerce</option>
                            <option value="Art">&nbsp; Art</option>
                        </select>
                        </label>
                </div>
                </div>
                    <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    
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
                  Subjects</label>
                    {/* {
                    this.state.subjects.map((subjects,index)=>{ */}
                        {/* return( */}
                            {/* <div  key={index}> */}
                            <select  name="subject1" id="subject1"   onChange={this.handleInputChange1} >
                                <option value={"None"}>&nbsp;Select the subject 1</option>
                                <option value={'Biology'}>&nbsp;  Biology</option>
                                <option value={'Mathematics'}>&nbsp;  Mathematics</option>
                                <option value={'Accounting'}>&nbsp;Accounting</option>
                                <option value={"Sinhala"}>&nbsp;Sinhala</option>
                                <option value={"BTec"}>&nbsp;BTEC</option>
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
                   &nbsp;&nbsp;&nbsp;   Teacher's Name</label><br></br>
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
                            <select  name="subject2"  for="subject2" onChange={this.handleInputChange1} >
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
                <select value={this.state.teacher2} onChange={this.handleInputChangerr2}  >
                                        {options2.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                        </select>
               
                </div>
              
                 <div className="col-lg-3 ">
                 {/* <label>Class Fees</label><br></br> */}
                 <select for="fees2" value={this.state.teacher2} onChange={this.handleInputChangerr2}  >
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
                <select value={this.state.teacher3} onChange={this.handleInputChangerr}  >
                                        {options3.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                        </select>
               
                </div>
              
                 <div className="col-lg-3 ">
                 {/* <label>Class Fees</label><br></br> */}
                 <select for="fees3" value={this.state.teacher3} onChange={this.handleInputChangerr}  >
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
                            <select  name="subject4"  for="subject4" onChange={this.handleInputChange1} >
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
                                readOnly>
                            </input>
                            </div>
                            </div>


          
          
          
                <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%",marginTop:"30px"}}>&nbsp;
                    <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp;&nbsp;
                        <label for="amount" className="form-lable" style={{marginBottom:'5px'}}>Payment Amount (Rs.)</label>
                            <input type="number"
                                className="form-control"
                                name="amount"
                                placeholder="Enter Total Amount"
                                value={this.state.amount}
                                onChange={this.handleInputChange1} 
                                require>
                            </input>
                        
                        
                    </div>
                    </div>
                    </div>
                    </div>
          

                  
      
                {/* <button className="btn btn-danger col-lg-2 " style={{marginLeft:"700px",marginTop:"-38px",height:"38px"}} onClick={() => this.handleRemove() }>Remove</button> */}
               
            {/* </div> */}
            
                {/* <hr></hr> */}
                {/* <button className="btn btn-success col-lg-2" onClick={(e) => this.addSubject(e)}>Add Subject</button> */}
                <hr></hr>

                <button className="btn btn-danger" type="submit" style={{marginTop:'15px', width:"150px"}} onClick={this.resetForm}>
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                    &nbsp; Reset
                    </button> &nbsp;

                <button className="btn btn-success col-lg-2" onClick={(e) => this. handleSubmit(e) } style={{marginTop:'15px', width:"150px"}}>
                <i className="far fa-check-square"></i>&nbsp;&nbsp;Update</button>
<br></br>
<br></br>

                        
                       
                  
    </div>

            </div>
            
            
        )
    } 


}