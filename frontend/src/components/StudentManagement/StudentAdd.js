import React,{Component} from "react";
import axios from "axios";

export default class StudentAdd extends Component{

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
                    // "rtype":""

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

//Submit the form
    onSubmit = (e)=>{
        e.preventDefault();

        const isValid = this.validate();
        if(isValid){

        const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate} = this.state;

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
            // rtype:rtype,
        }
        console.log(data);

        axios.post("http://localhost:8091/student/add",data).then((res) =>{
            if(res.data.success){
                alert("Student Added Successfully")
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
                    // "rtype":""
                }
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
            // rtype:'',
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
                <a href="/" style={{textDecoration:'none', color:'white',display:'flex'}}>&nbsp;<i class="fa-solid fa-angles-left"
                style={{marginTop:'5px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>
                </button>
                <br></br><br></br>

                <h4><i>Add New Student</i></h4>
                <form style={{paddingLeft:"30px", paddingTop:"20px"}}>

                {/* <div className="col-6">
                    <div className="mb-3">
    
                    <input type="text" className="form-control" id="type" style={{"display":"none"}}
                        name="type" 
                        value="Counter" 
                        onChange={this.handleInputChange}/>
   
                    </div>
                </div>   */}

                <div className="row">   
                <div className="col-lg-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                        <label for="stuName" className="form-lable" style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                                className="form-control"
                                name="stuName"
                                placeholder="Enter Student Name"
                                value={this.state.stuName}
                                onChange={this.handleInputChange} require>
                            </input>
                            {this.state.nameError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
                            ):null}
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-6">

                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="address" className="form-lable"style={{marginBottom:'5px'}}>Address</label>
                            <input type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Address"
                                value={this.state.address}
                                onChange={this.handleInputChange} required>
                            </input>
                        
                    </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-6">
                
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-cake-candles"></i>&nbsp;&nbsp;&nbsp;
                        <label for= "birthDay" className = "form-lable" style={{marginBottom:'5px'}}>Birth Day</label>
                            <input type="date"
                                className="form-control"
                                id="birthDay"
                                name="birthDay"
                                placeholder="Enter Your Birth Day"
                                value={this.state.birthDay}
                                onChange={this.handleInputChange} required>
                            </input>
                        
                    </div>
                    </div>
                    <div className="col-6">


                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-mars-and-venus"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="gender" className="form-lable" style={{marginBottom:'5px'}}>Gender</label>
                            <div onChange={this.handleInputChange}>
                            &nbsp;&nbsp;&nbsp;<input type="radio" value="MALE" name="gender"/> Male
                            &nbsp;&nbsp;&nbsp;<input type="radio" value="FEMALE" name="gender"/> Female
                            </div> 
                            
                    </div> 
                    </div>
                    </div>



                    <div className="row">
                    <div className="col-6">

                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-at"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="email" className="form-lable" style={{marginBottom:'5px'}}>Email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleInputChange} required>
                            </input>
                            {this.state.emailError ?(
                            <div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
                            ):null}
                            
                    </div>
                    </div>

                    <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="phone" className="form-lable" style={{marginBottom:'5px'}}>Phone</label>
                            <input type="text"
                                className="form-control"
                                name="phone"
                                placeholder="xxx xxx xx xx"
                                value={this.state.phone}
                                onChange={this.handleInputChange} required>
                            </input>
                            {this.state.phoneError ?(
                        <div style={{color:"red",fontWeight:"bold"}} >{this.state.phoneError}</div>
                        ):null}
                    </div>
                    </div>
                    </div>


                    <div className="row">
                    <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-school"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="school" className="form-lable" style={{marginBottom:'5px'}}>School</label>
                            <input type="text"
                                className="form-control"
                                name="school"
                                placeholder="Enter School Name"
                                value={this.state.school}
                                onChange={this.handleInputChange} required>
                            </input>
                            
                    </div>
                    </div>

                    <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <label  for="stream" className="form-lable" style={{marginTop:"-20px"}}>
                    <i class="fa-solid fa-list"></i>&nbsp;&nbsp;&nbsp;
                        A/L Stream<br></br>
                        <select  name="stream" value={this.state.stream} onChange={this.handleInputChange} 
                        style={{width:"290px", height:"35px", border:"none", marginTop:"5px"}} required>
                            <option value="Select your A/L stream">&nbsp;&nbsp;&nbsp;--Select your A/L stream--</option>
                            <option value="biology">&nbsp;  Biology</option>
                            <option value="mathematics">&nbsp;  Mathematics</option>
                            <option value="commerce">&nbsp;  Commerce</option>
                            <option value="art">&nbsp; Art</option>
                            <option value="technology">&nbsp; Technology</option>
                        </select>
                        </label>
                </div>
                </div>
                </div>

                <div className="row">
                    <div className="col-6">

                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-user-group"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="guardianName" className="form-lable" style={{marginBottom:'5px'}}>Guardian Name</label>
                            <input type="text"
                                className="form-control"
                                name="guardianName"
                                placeholder="Enter Guardian Name"
                                value={this.state.guardianName}
                                onChange={this.handleInputChange} required>
                            </input>
                        
                    </div>
                    </div>
                
                    <div className="col-6">
                    <div className="form-group" style={{marginBottom:'15px',width:"70%"}}>&nbsp;
                    <i class="fa-solid fa-dollar-sign"></i>&nbsp;&nbsp;&nbsp;
                        <label  for="admissionFees" className="form-lable" style={{marginBottom:'5px'}}>Admission Fees</label>
                            <input type="number"
                                className="form-control"
                                name="admissionFees"
                                placeholder="Enter Admission Fees"
                                value={this.state.admissionFees}
                                onChange={this.handleInputChange} required>
                            </input>
                        
                    </div>
                    </div>
                    </div>

                    <div className="row">
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
                                onChange={this.handleInputChange} required>
                            </input>
                        
                    </div>
                    </div>
                    </div>

                    <button className="btn btn-danger" type="submit" style={{marginTop:'15px', width:"150px"}} onClick={this.resetForm}>
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                    &nbsp; Reset
                    </button> &nbsp;

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px',marginLeft:'40px',width:"150px"}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Submit
                    </button>&nbsp;

                   


                </form>

            </div>
        )
    }

} 