import React, {Component} from "react";
import axios from "axios";

export default class Edit extends Component{
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
            "rdate":""

        };
      
      }


    
      
    //   retriveStudentList(){
    //     axios.get(" http://localhost:9000/student/students").then(res =>{
    //       if(res.data.success){
    //         this.setState({
    //           studentList:res.data.existingPost
    //         });
    //         console.log(this.state.studentList)
    //       }
      
    //     });
    //   }
    
    
    hadleInputChange =(e) =>{
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id; 

        const isValid = this.validate();
        if(isValid){

       

        const {stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate} =  this.state;

        const data = {
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
            rdate:rdate
        }

        console.log(data)

        axios.put(`http://localhost:8091/student/update/${id}`, data).then((res) =>{
            if(res.data.success){
                alert("Student Update Successfully")
                this.setState(
                    {
                        "stuName":'',
                        "address":"",
                        "birthDay":"",
                        "gender":"",
                        "email":"",
                        "phone":"",
                        "school":"",
                        "stream":"",
                        "guardianName":"",
                        "admissionFees":"",
                        "rdate":""
                    }
                )
            }
        })


    }
}

    
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
            rdate:''
        })
     }

    componentDidMount(){
        const id = this.props.match.params.id; 

        axios.get(`http://localhost:8091/student/get/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    stuName:res.data.students.stuName,
                    address:res.data.students.address,
                    birthDay:res.data.students.birthDay,
                    gender:res.data.students.gender,
                    email:res.data.students.email,
                    phone:res.data.students.phone,
                    school:res.data.students.school,
                    stream:res.data.students.stream,
                    guardianName:res.data.students.guardianName,
                    admissionFees:res.data.students.admissionFees,
                    rdate:res.data.students.rdate


                });

                console.log(this.state.student);
            }
        });
    } 


      //form validation

      validate =()=>{
        let emailError="";
        let nameError="";
        let phoneError=""
        
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
        
        
        if(emailError || nameError || phoneError){
        this.setState({emailError,nameError,phoneError});
        return false;
        }
        
        return true;
        };


 
    
    
      render(){
        return(
          <div className="container" style={{padding:"40px",marginLeft:"300px",width:"76%"}}>
               <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'40px', width:'110px', marginTop:"-10px"}}>
                <a href="/update" style={{textDecoration:'none', color:'white',display:'flex'}}>&nbsp;<i class="fa-solid fa-angles-left"
                style={{marginTop:'5px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>
                </button>
                <br></br><br></br>
            {/* {this.state.studentList.map(studentList =>(
              <div>
                <p>{studentList.name}</p>
                <p>{studentList.address}</p>
                <p>{studentList.birthDay}</p>
                <p>{studentList.gender}</p>
                <p>{studentList.email}</p>
                <p>{studentList.phone}</p>
                <p>{studentList.school}</p>
                <p>{studentList.stream}</p>
                <p>{studentList.guardianName}</p>
                <p>{studentList.admissionFees}</p>
                <p>{studentList.regDate}</p>
               <hr></hr>
              </div>
            
            ))} */}
             <div className="row">
                  <div className="col-lg-9 mt-2 mb-2">
            <h4>Update Student Details</h4>
            <br></br>
            </div>
            
      
    
           <form className="needs-validation" noValidate>

           <div className="row">
               <div className="col-6">    
           <div className="form-group col-md-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                    <lable style={{marginBottom:'5px'}}>Name</lable>
                        <input type="text"
                            className="form-control"
                            name="stuName"
                            placeholder="Enter Name"
                            value={this.state.stuName}
                            onChange={this.hadleInputChange}/>
                             {this.state.nameError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
                            ):null}
            </div>  
            </div>

            <div className="col-6">  

                <div className="form-group col-md-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;
                    <lable style={{marginBottom:'5px'}}>Address</lable>
                        <input type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter Address"
                            value={this.state.address}
                            onChange={this.hadleInputChange}/>
                </div>
              </div>
              </div>

              <div className="row">
               <div className="col-6">    
                <div className="form-group col-mb-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-cake-candles"></i>&nbsp;&nbsp;&nbsp;
                    <lable  for="birthDay" className="form-label" style={{marginBottom:'5px'}}>Birth Day</lable>
                        <input type="date"
                            className="form-control"
                            id="birthDay"
                            name="birthDay"
                            placeholder="Enter Birth Day"
                            value={this.state.birthDay}
                            onChange={this.hadleInputChange}/>
                </div>
                </div>


                <div className="col-6">  
                 <div className="form-group col-mb-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-mars-and-venus"></i>&nbsp;&nbsp;&nbsp;
                    <lable style={{marginBottom:'5px'}}>Gender</lable>
                        <input type="text"
                            className="form-control"
                            name="gender"
                            placeholder="Enter Gender"
                            value={this.state.gender}
                            onChange={this.hadleInputChange}/>
                </div> 
                </div>
                </div>


{/*                 
                <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-mars-and-venus"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="gender" className="form-lable" style={{marginBottom:'5px'}}>Gender</label>
                            <div onChange={this.handleInputChange}>
                            &nbsp;&nbsp;&nbsp;<input type="radio" value="MALE" name="gender"/> Male
                            &nbsp;&nbsp;&nbsp;<input type="radio" value="FEMALE" name="gender"/> Female
                            </div> 
                            
                    </div> 
                 */}




              <div className="row">
               <div className="col-6"> 

                <div className="form-group col-md-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-at"></i>&nbsp;&nbsp;&nbsp;
                    <lable style={{marginBottom:'5px'}}>Email</lable>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="xxxx.@gmail.com"
                            value={this.state.email}
                            onChange={this.hadleInputChange}/>
                             {this.state.emailError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
                            ):null}
                </div>
                </div>

                <div className="col-6"> 
                <div className="form-group col-mb-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}>Phone</label>
                        <input type="text"
                            className="form-control"
                            name="phone"
                            placeholder="xxx xxx xx xx"
                            value={this.state.phone}
                            onChange={this.hadleInputChange}/>
                                    {this.state.phoneError ?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.phoneError}</div>
                        ):null}
                </div>
                </div>
                </div>





                <div className="row">
               <div className="col-6"> 

                <div className="form-group col-md-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-school"></i>&nbsp;&nbsp;&nbsp;
                    <lable style={{marginBottom:'5px'}}>School Name</lable>
                        <input type="text"
                            className="form-control"
                            name="school"
                            placeholder="Enter School Name"
                            value={this.state.school}
                            onChange={this.hadleInputChange}/>
                </div>
                </div>
{/* 
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Address</lable>
                    <input type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter Home Address"
                    value={this.state.address}
                    onChange={this.hadleInputChange}/>
                </div> */}

{/* 
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>A/L Stream</lable>
        
                   
                    <select class="form-select" aria-label="Default select example"
                     className="form-control"
                     name="stream"
                     value={this.state.stream}
                     onChange={this.hadleInputChange}>
                    <option selected>Select the A/L Stream</option>
                    <option value="1">Biology</option>
                    <option value="2">Mathematics</option>
                    <option value="3">Commers</option>
                    <option value="4">Arts</option>
                    <option value="5">Technology</option>
                    </select>

                </div> */}

                    
                {/* <div className="form-group" style={{marginBottom:'15px',width:"70%", marginTop:"-20px"}}>&nbsp;
                   
                   <label> */}
                   {/* <i class="fa-solid fa-list"></i>&nbsp;&nbsp;&nbsp; */}
                       {/* A/L Stream:
                       <select  name="stream" value={this.state.stream} onChange={this.handleInputChange}>
                           <option value="biology">&nbsp;  Biology</option>
                           <option value="mathematics">&nbsp;  Mathematics</option>
                           <option value="commerce">&nbsp;  Commerce</option>
                           <option value="art">&nbsp; Art</option>
                       </select>
                       </label>
                </div> */}

              <div className="col-6"> 
                <div className="form-group col-mb-6" style={{marginBottom:'15px',width:"70%"}}>
                    <label>
                    <i class="fa-solid fa-list"></i>&nbsp;&nbsp;&nbsp;
                        A/L Stream<br></br>
                        <select  name="stream" value={this.state.stream} onChange={this.hadleInputChange} style={{width:"300px", height:"35px", border:"none"}}>
                            <option value="Select your A/L stream">&nbsp; -- Select your A/L stream --</option>
                            <option value="biology">&nbsp;  Biology</option>
                            <option value="mathematics">&nbsp;  Mathematics</option>
                            <option value="commerce">&nbsp;  Commerce</option>
                            <option value="art">&nbsp; Art</option>
                        </select>
                        </label>
                </div>
                </div>
                </div>



                <div className="row">
               <div className="col-6"> 

                <div className="form-group col-md-6" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-user-group"></i>&nbsp;&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}>Guardian Name</label>
                        <input type="text"
                            className="form-control"
                            name="guardianName"
                            placeholder="Enter Guardian Name"
                            value={this.state.guardianName}
                            onChange={this.hadleInputChange}/>
                </div>
                </div>

                <div className="col-6"> 
                <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-dollar-sign"></i>&nbsp;&nbsp;&nbsp;
                    <lable style={{marginBottom:'5px'}}>Admission Fees</lable>
                        <input type="number"
                            className="form-control"
                            name="admissionFees"
                            placeholder="Enter Admoission Fee Amount"
                            value={this.state.admissionFees}
                            onChange={this.hadleInputChange}/>
                </div>
                </div>
                </div>

                
                
                <div className="col-6"> 
                <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-calendar"></i>&nbsp;&nbsp;&nbsp;
                    <lable  for="rdate" className="form-label" style={{marginBottom:'5px'}}>Register Date</lable>
                        <input type="date"
                            className="form-control"
                            id="rdate"
                            name="rdate"
                            placeholder="Enter Register Date"
                            value={this.state.rdate}
                            onChange={this.hadleInputChange}/>
                </div>
                </div>



                {/* Reset Button */}
                <button className="btn btn-danger" type="submit" style={{marginTop:'15px', width:"150px"}} onClick={this.resetForm}>
                     <i class="fa-solid fa-arrow-rotate-right"></i>
                    &nbsp; Reset

                </button> &nbsp;

                {/*Update Button */}
                <button className="btn btn-success" type="submit" style={{marginTop:'15px',marginLeft:'40px',width:"150px"}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Update

                </button> &nbsp;


               

        
    
            </form>
          </div>
          </div>

        )//closing render
      }
 
      
}